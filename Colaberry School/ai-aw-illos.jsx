/* v2 — blueprint-style system schematics (token-colored, Lucide-matching 2px strokes) */

function AwIlloFrame({ children, label, viewBox = '0 0 300 230' }) {
  return (
    <div className="aw-illo">
      <svg viewBox={viewBox} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        {children}
      </svg>
      {label ? <span className="aw-illo__cap">{label}</span> : null}
    </div>
  );
}

/* 01 — LEARN: prompt → Claude → understanding */
function AwIlloLearn() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--blue-500)';
  return (
    <AwIlloFrame label="FIG. 01 — PROMPT → MODEL → SKILL">
      {/* prompt card */}
      <rect x="14" y="58" width="92" height="64" rx="10" stroke={ink} strokeWidth="2" />
      <line x1="28" y1="78" x2="92" y2="78" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="92" x2="78" y2="92" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <line x1="28" y1="106" x2="86" y2="106" stroke={c} strokeWidth="2" strokeLinecap="round" />
      <text x="14" y="44" className="aw-illo__t">PROMPT</text>
      {/* flow */}
      <path d="M106 90 H 138" stroke={c} strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" className="aw-illo__dash" />
      {/* model node */}
      <circle cx="172" cy="90" r="32" stroke={c} strokeWidth="2.5" />
      <circle cx="172" cy="90" r="20" stroke={line} strokeWidth="2" strokeDasharray="2 5" className="aw-illo__dash" />
      <circle cx="172" cy="90" r="5" fill={c} />
      <text x="146" y="142" className="aw-illo__t">CLAUDE</text>
      {/* flow out */}
      <path d="M204 90 H 236" stroke={c} strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" className="aw-illo__dash" />
      {/* skill stack */}
      <rect x="236" y="62" width="50" height="16" rx="6" stroke={ink} strokeWidth="2" />
      <rect x="236" y="84" width="50" height="16" rx="6" stroke={ink} strokeWidth="2" />
      <rect x="236" y="106" width="50" height="16" rx="6" stroke={c} strokeWidth="2.5" />
      <text x="236" y="44" className="aw-illo__t">SKILLS</text>
      {/* grid dots */}
      <circle cx="40" cy="180" r="2" fill={line} /><circle cx="70" cy="180" r="2" fill={line} /><circle cx="100" cy="180" r="2" fill={line} />
      <circle cx="130" cy="180" r="2" fill={line} /><circle cx="160" cy="180" r="2" fill={line} /><circle cx="190" cy="180" r="2" fill={c} />
    </AwIlloFrame>
  );
}

/* 02 — BUILD: orchestrator + agent team */
function AwIlloBuild() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--green-600)';
  return (
    <AwIlloFrame label="FIG. 02 — YOUR AGENT TEAM">
      {/* orchestrator */}
      <rect x="112" y="22" width="76" height="40" rx="10" stroke={c} strokeWidth="2.5" />
      <circle cx="150" cy="42" r="6" fill={c} />
      <text x="112" y="14" className="aw-illo__t">ORCHESTRATOR</text>
      {/* connectors */}
      <path d="M150 62 V 88 M150 88 H 60 M150 88 H 240 M60 88 V 112 M150 88 V 112 M240 88 V 112" stroke={line} strokeWidth="2" strokeDasharray="3 6" className="aw-illo__dash" />
      {/* agents */}
      <rect x="28" y="112" width="64" height="48" rx="10" stroke={ink} strokeWidth="2" />
      <circle cx="60" cy="130" r="7" stroke={c} strokeWidth="2" />
      <line x1="44" y1="148" x2="76" y2="148" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <rect x="118" y="112" width="64" height="48" rx="10" stroke={ink} strokeWidth="2" />
      <circle cx="150" cy="130" r="7" stroke={c} strokeWidth="2" />
      <line x1="134" y1="148" x2="166" y2="148" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <rect x="208" y="112" width="64" height="48" rx="10" stroke={ink} strokeWidth="2" />
      <circle cx="240" cy="130" r="7" stroke={c} strokeWidth="2" />
      <line x1="224" y1="148" x2="256" y2="148" stroke={line} strokeWidth="2" strokeLinecap="round" />
      <text x="28" y="178" className="aw-illo__t">AGENT 01</text>
      <text x="118" y="178" className="aw-illo__t">AGENT 02</text>
      <text x="208" y="178" className="aw-illo__t">AGENT 03</text>
      {/* task ticks */}
      <path d="M252 36 l5 5 9 -10" stroke={c} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="244" y="24" width="30" height="30" rx="8" stroke={line} strokeWidth="2" />
    </AwIlloFrame>
  );
}

/* 03 — DEPLOY: system → pipeline → world */
function AwIlloDeploy() {
  const line = 'var(--neutral-300)';
  const ink = 'var(--neutral-500)';
  const c = 'var(--red-500)';
  return (
    <AwIlloFrame label="FIG. 03 — SHIP TO PRODUCTION">
      {/* server stack */}
      <rect x="20" y="64" width="74" height="20" rx="6" stroke={ink} strokeWidth="2" />
      <rect x="20" y="90" width="74" height="20" rx="6" stroke={ink} strokeWidth="2" />
      <rect x="20" y="116" width="74" height="20" rx="6" stroke={c} strokeWidth="2.5" />
      <circle cx="32" cy="74" r="2.5" fill={c} /><circle cx="32" cy="100" r="2.5" fill={line} /><circle cx="32" cy="126" r="2.5" fill={c} />
      <text x="20" y="50" className="aw-illo__t">YOUR SYSTEM</text>
      {/* pipeline */}
      <path d="M94 100 H 140" stroke={c} strokeWidth="2" strokeDasharray="3 6" strokeLinecap="round" className="aw-illo__dash" />
      <path d="M132 92 l10 8 -10 8" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* globe */}
      <circle cx="196" cy="100" r="40" stroke={ink} strokeWidth="2" />
      <ellipse cx="196" cy="100" rx="18" ry="40" stroke={line} strokeWidth="2" />
      <line x1="156" y1="100" x2="236" y2="100" stroke={line} strokeWidth="2" />
      <text x="172" y="162" className="aw-illo__t">REAL WORLD</text>
      {/* users */}
      <circle cx="262" cy="58" r="9" stroke={c} strokeWidth="2" />
      <path d="M249 84 a13 11 0 0 1 26 0" stroke={c} strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="284" cy="106" r="7" stroke={ink} strokeWidth="2" />
      <path d="M274 126 a10 9 0 0 1 20 0" stroke={ink} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M228 72 L 250 62 M232 96 L 274 102" stroke={line} strokeWidth="2" strokeDasharray="3 6" className="aw-illo__dash" />
    </AwIlloFrame>
  );
}

Object.assign(window, { AwIlloLearn, AwIlloBuild, AwIlloDeploy });
