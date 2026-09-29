/* Colaberry — Video Render Studio.
   Mounts any animated clip from this design system and renders it to a
   downloadable .mp4 entirely in the browser:
   frame loop → seek event on the Stage svg → serialize (fonts/images are
   already inlined as data: URLs) → rasterize to canvas → WebCodecs
   VideoEncoder (H.264) → Mp4Muxer → Blob download.
   Requires: animations.jsx + the scene files loaded first (same x-import
   `from` list), and mp4-muxer UMD on window (loaded in the page helmet). */

const RS = {
  bg: '#EFEDE8', panel: '#FAF9F6', ink: '#171717', red: '#E8232E',
  green: '#2F9E44', blue: '#33739B', gray: '#6E6E6E', line: '#DDD9D0',
  display: "'Roboto', system-ui, -apple-system, 'Segoe UI', sans-serif",
  mono: "'Roboto Mono', ui-monospace, 'SF Mono', Menlo, monospace",
};

const CLIPS = [
  { id: 'light-intro', label: 'Intro · Light', meta: '3s · full-color logo', file: 'colaberry-intro-light', global: 'IntroOutroLightAnimation', clip: 'intro' },
  { id: 'light-outro', label: 'Outro · Light', meta: '6s · CTA end card', file: 'colaberry-outro-light', global: 'IntroOutroLightAnimation', clip: 'outro' },
  { id: 'dark-intro', label: 'Intro · Dark', meta: '3s · white logo', file: 'colaberry-intro-dark', global: 'IntroOutroAnimation', clip: 'intro' },
  { id: 'dark-outro', label: 'Outro · Dark', meta: '6s · CTA end card', file: 'colaberry-outro-dark', global: 'IntroOutroAnimation', clip: 'outro' },
];

const sleepMs = (ms) => new Promise((r) => setTimeout(r, ms));
const raf2 = () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

async function pickCodec(W, H, fps) {
  const candidates = ['avc1.64002A', 'avc1.640028', 'avc1.4D402A', 'avc1.42E02A'];
  for (const codec of candidates) {
    try {
      const s = await VideoEncoder.isConfigSupported({ codec, width: W, height: H, bitrate: 9e6, framerate: fps });
      if (s && s.supported) return codec;
    } catch (e) {}
  }
  return null;
}

function VideoRenderStudio() {
  const [sel, setSel] = React.useState('light-intro');
  const [busy, setBusy] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [status, setStatus] = React.useState('');
  const [done, setDone] = React.useState(null); // {url, name, size}
  const previewRef = React.useRef(null);
  const cancelRef = React.useRef(false);
  const active = CLIPS.find((c) => c.id === sel);

  const render = async () => {
    const svg = previewRef.current && previewRef.current.querySelector('svg[data-om-exportable-video-with-duration-secs]');
    if (!svg) { setStatus('Clip not mounted yet — wait a moment and retry.'); return; }
    if (typeof VideoEncoder === 'undefined') { setStatus('This browser lacks WebCodecs (needed for .mp4). Use Chrome/Edge, or Share → Export → Video.'); return; }
    if (!window.Mp4Muxer) { setStatus('MP4 muxer failed to load — check your connection and reload.'); return; }

    setBusy(true); setDone(null); setProgress(0); cancelRef.current = false;
    try {
      setStatus('Preparing fonts…');
      const t0 = performance.now();
      while (!svg.hasAttribute('data-om-fonts-inlined') && performance.now() - t0 < 6000) await sleepMs(120);

      const duration = parseFloat(svg.getAttribute('data-om-exportable-video-with-duration-secs'));
      const fps = 30, W = 1080, H = 1920;
      const total = Math.max(1, Math.round(duration * fps));
      const codec = await pickCodec(W, H, fps);
      if (!codec) throw new Error('No supported H.264 encoder profile found.');

      const canvas = document.createElement('canvas');
      canvas.width = W; canvas.height = H;
      const ctx = canvas.getContext('2d');
      const muxer = new window.Mp4Muxer.Muxer({
        target: new window.Mp4Muxer.ArrayBufferTarget(),
        video: { codec: 'avc', width: W, height: H },
        fastStart: 'in-memory',
        firstTimestampBehavior: 'offset',
      });
      let encErr = null;
      const encoder = new VideoEncoder({
        output: (chunk, meta) => muxer.addVideoChunk(chunk, meta),
        error: (e) => { encErr = e; },
      });
      encoder.configure({ codec, width: W, height: H, bitrate: 9_000_000, framerate: fps });

      for (let i = 0; i < total; i++) {
        if (cancelRef.current) break;
        if (encErr) throw encErr;
        const t = Math.min(i / fps, duration - 0.001);
        svg.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', { detail: { time: t } }));
        await raf2();

        const clone = svg.cloneNode(true);
        clone.removeAttribute('style'); // drop preview scale/shadow
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        const xml = new XMLSerializer().serializeToString(clone);
        const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(xml)}`;
        const img = new Image();
        img.decoding = 'sync';
        await new Promise((res, rej) => {
          const kill = setTimeout(() => rej(new Error(`Frame ${i} rasterize timed out`)), 8000);
          img.onload = () => { clearTimeout(kill); res(); };
          img.onerror = () => { clearTimeout(kill); rej(new Error(`Frame ${i} rasterize failed`)); };
          img.src = url;
        });
        ctx.drawImage(img, 0, 0, W, H);

        const frame = new VideoFrame(canvas, { timestamp: Math.round(i * 1e6 / fps), duration: Math.round(1e6 / fps) });
        encoder.encode(frame, { keyFrame: i % (fps * 2) === 0 });
        frame.close();
        while (encoder.encodeQueueSize > 4) await sleepMs(4);
        setProgress((i + 1) / total);
        setStatus(`Rendering frame ${i + 1} / ${total}`);
      }

      if (cancelRef.current) { try { encoder.close(); } catch (e) {} setStatus('Cancelled.'); setBusy(false); setProgress(0); return; }
      setStatus('Encoding…');
      await encoder.flush();
      muxer.finalize();
      const blob = new Blob([muxer.target.buffer], { type: 'video/mp4' });
      const outUrl = URL.createObjectURL(blob);
      const name = `${active.file}-1080x1920-30fps.mp4`;
      setDone({ url: outUrl, name, size: (blob.size / (1024 * 1024)).toFixed(1) });
      setStatus('Done — downloading.');
      const a = document.createElement('a');
      a.href = outUrl; a.download = name;
      document.body.appendChild(a); a.click(); a.remove();
      svg.dispatchEvent(new CustomEvent('data-om-seek-to-time-frame', { detail: { time: 0 } }));
    } catch (e) {
      setStatus(`Render failed: ${e && e.message ? e.message : e}`);
    }
    setBusy(false);
  };

  const Root = window[active.global];
  const btnStyle = (on) => ({
    display: 'block', width: '100%', textAlign: 'left', cursor: 'pointer',
    background: on ? RS.ink : RS.panel, color: on ? '#fff' : RS.ink,
    border: `1px solid ${on ? RS.ink : RS.line}`, borderRadius: 10,
    padding: '12px 14px', fontFamily: RS.display, marginBottom: 8,
  });

  return (
    <div style={{ position: 'absolute', inset: 0, display: 'flex', background: RS.bg, minHeight: 0 }}>
      {/* Left rail — clip list + render controls */}
      <div style={{ width: 280, flexShrink: 0, padding: '18px 16px', borderRight: `1px solid ${RS.line}`, overflowY: 'auto' }}>
        <div style={{ fontFamily: RS.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: RS.gray, marginBottom: 10 }}>Clips</div>
        {CLIPS.map((c) => (
          <button key={c.id} disabled={busy} onClick={() => { setSel(c.id); setDone(null); setStatus(''); setProgress(0); }} style={btnStyle(c.id === sel)}>
            <span style={{ display: 'block', fontWeight: 900, fontSize: 14 }}>{c.label}</span>
            <span style={{ display: 'block', fontFamily: RS.mono, fontSize: 11, opacity: 0.7, marginTop: 2 }}>{c.meta}</span>
          </button>
        ))}

        <div style={{ fontFamily: RS.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: RS.gray, margin: '20px 0 10px' }}>Render</div>
        <div style={{ fontFamily: RS.mono, fontSize: 11, color: RS.gray, lineHeight: 1.7, marginBottom: 12 }}>MP4 · H.264<br />1080×1920 · 30 fps</div>
        {!busy && (
          <button onClick={render} style={{ width: '100%', cursor: 'pointer', background: RS.red, color: '#fff', border: 'none', borderRadius: 99, padding: '13px 18px', fontFamily: RS.display, fontWeight: 900, fontSize: 15 }}>Render .mp4</button>
        )}
        {busy && (
          <button onClick={() => { cancelRef.current = true; }} style={{ width: '100%', cursor: 'pointer', background: RS.panel, color: RS.ink, border: `1px solid ${RS.line}`, borderRadius: 99, padding: '13px 18px', fontFamily: RS.display, fontWeight: 700, fontSize: 15 }}>Cancel</button>
        )}
        {(busy || progress > 0) && (
          <div style={{ marginTop: 14, height: 8, borderRadius: 99, background: RS.line, overflow: 'hidden' }}>
            <div style={{ width: `${Math.round(progress * 100)}%`, height: '100%', background: `linear-gradient(90deg, ${RS.red}, ${RS.green}, ${RS.blue})`, transition: 'width 120ms linear' }} />
          </div>
        )}
        {status && <div style={{ marginTop: 10, fontFamily: RS.mono, fontSize: 11, color: RS.gray, lineHeight: 1.6, overflowWrap: 'break-word' }}>{status}</div>}
        {done && (
          <a href={done.url} download={done.name} style={{ display: 'block', marginTop: 12, fontFamily: RS.mono, fontSize: 11, color: RS.blue, lineHeight: 1.6, overflowWrap: 'break-word' }}>{done.name} · {done.size} MB — save again</a>
        )}
        <div style={{ marginTop: 22, paddingTop: 14, borderTop: `1px solid ${RS.line}`, fontFamily: RS.mono, fontSize: 10.5, color: RS.gray, lineHeight: 1.7 }}>Renders locally in your browser (Chrome/Edge). Host export still works: Share → Export → Video.</div>
      </div>

      {/* Preview — the live Stage being driven */}
      <div ref={previewRef} style={{ position: 'relative', flex: 1, minWidth: 0 }}>
        {Root ? <Root key={active.id} clip={active.clip} /> : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: RS.mono, fontSize: 12, color: RS.gray }}>Loading scenes…</div>
        )}
      </div>
    </div>
  );
}

window.VideoRenderStudio = VideoRenderStudio;
