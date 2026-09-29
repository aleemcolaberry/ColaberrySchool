# Font licenses

The Colaberry design system **self-hosts** its three typefaces plus the RemixIcon icon font.
The `.woff2` files live in `files/`, declared by `fonts.css` / `remixicon.css` in this folder
and imported by `tokens/fonts.css` — no CDN requests, works offline.

| Font | Role | License | Source |
|---|---|---|---|
| **Roboto** | Display + body | Apache License 2.0 | https://fonts.google.com/specimen/Roboto |
| **Roboto Mono** | Code / data | Apache License 2.0 | https://fonts.google.com/specimen/Roboto+Mono |
| **Quicksand** | *olaberry* logotype only | SIL Open Font License 1.1 | https://fonts.google.com/specimen/Quicksand |
| **RemixIcon 4.6.0** | Icon set | Apache License 2.0 | https://remixicon.com |

- **Apache-2.0** and **SIL OFL-1.1** both permit free use, embedding, and self-hosting in commercial work.
- Keep this notice with the font files if you redistribute them.

> Quicksand is used here as the closest open-source match to Colaberry's custom *olaberry* logotype.
> If the original logotype font is available, substitute it and update `tokens/typography.css`.
