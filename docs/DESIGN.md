# Design

The visual system behind Mnemosyne Companion.

---

## Intent

The app should feel like the book: warm, quiet, clinical without being cold. It is used at a desk, at a bedside and on a phone between patients, so it has to be legible at a glance, comfortable for long study, and calm enough not to compete with the material.

Three rules shaped everything:

1. **The material leads.** Chrome is restrained; the remedy text is the loudest thing on screen.
2. **One accent, used sparingly.** Gold marks what matters — a keynote bullet, the progress ring, a filter that is on. Maroon carries structure.
3. **Nothing depends on colour alone.** Kingdom and miasm are always text, never just a hue.

## Palette — the ember theme

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#f6f0e4` | `#17110d` | Page background |
| `--card` | `#fffdf8` | `#241c16` | Card surfaces |
| `--ink` | `#2b2018` | `#f4ecdd` | Body text |
| `--maroon` | `#6e1f2a` | `#4a141c` | Structure, headers, primary buttons |
| `--gold` | `#b8892b` | `#dcb862` | Accent — the single highlight |
| `--good` | `#2f7d5b` | — | Better modalities, success |
| `--bad` | `#a3382f` | — | Worse modalities, danger |
| `--rule` | `#e7dcc7` | `#392e24` | Hairlines and dividers |

The header is a maroon gradient closed by a gold rule — the same device as the book's cover.

## Typography

- **Headings and verse** use a serif stack: Iowan Old Style, Palatino, Georgia, then a generic serif. This matches the book's Garamond setting without shipping a font file.
- **Interface text** uses the system sans-serif stack.
- **Verse is set in italic serif**, generous in size, with real line breaks — the Poetic Pearl is meant to be read as a poem, not a paragraph.

No web fonts are downloaded. That is a deliberate trade: the app is marginally less distinctive than the book, and completely self-contained.

## Layout

- A sticky header, a sticky tab bar, then content.
- **Desktop:** tabs run horizontally under the header; content is a centred column up to 1060 px; grids are two or three columns.
- **Phone:** the tabs become a fixed bottom navigation bar with icons; every grid collapses to a single column; the remedy card becomes a full-screen panel.
- Cards use soft shadows, a 16 px radius and a 1 px hairline — depth without weight.

## The diagrams

All six diagrams are hand-written inline SVG — no charting library, no raster images.

- They share one canvas convention and one palette, so they read as a set.
- Type never drops below a legible size, and every label sits inside its own shape with room to spare.
- Each diagram carries a text description for screen readers.
- They scale to their container, so they are equally at home in a wide column or on a phone.

## Motion

Motion is minimal and functional: a short rise-and-fade when a view opens, a brief slide when the remedy panel appears, a smooth width transition on the progress bar. Nothing loops, nothing decorates. The one rule is that motion must never leave content translucent — a fade that can be interrupted mid-way is a fade that can hide your work.

## Accessibility

- Real buttons for navigation, with labels.
- Diagrams described in text.
- Sufficient contrast in both themes.
- Comfortable tap targets on phones.
- Colour never the sole carrier of meaning.
- The whole app is usable with no network and, at a minimum, degrades to a readable list.

## The icon

The app mark is a gold rounded tile carrying a serif **M**, matching the gold-and-maroon of the book's cover. It is drawn as inline SVG (`assets/icon.svg`) so it needs no image file to render.
