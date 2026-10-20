# Changelog

All notable changes to **Mnemosyne Companion** are recorded here.
This project follows [Semantic Versioning](https://semver.org/).

## [1.0.0] — 2026-10-20

First public release. Published as the official companion application to *Mnemosyne Materia Medica*.

### Added

- **Quick reference** for all 100 polycrest remedies, searchable by symptom, keynote and pearl, and filterable by kingdom (plant / mineral / animal / nosode) and by miasmatic group.
- **Remedy cards** carrying the Poetic Pearl, retrieval trigger, eight keynotes, worse/better modalities, differentials against the nearest competitors, family and source.
- **Spaced-repetition drills** in three modes — Pearl → Remedy, Keynotes → Remedy, Remedy → Keynotes — with Again / Hard / Good / Easy grading on a 1, 3, 7, 21, 45-day schedule.
- **Progress tracking** — started, due-now and mastered counts with a progress ring, stored locally in the browser.
- **Six hand-drawn SVG diagrams** — the four-phase study cycle, the forgetting curve with review spikes, the four principles of retention, the C and LM potency scales compared, the miasmatic tree, and the memory palace.
- **Study-session timer** for the encode → recall → integrate → master protocol.
- **Guide** covering the method, the field guide to a remedy card, a short posology note and the safety frame.
- **Light and dark themes**, with the choice remembered.
- **Deep links** — `#remedies`, `#study`, `#diagrams`, `#guide`.
- **No-JavaScript fallback** — a plain static list of all 100 remedies is embedded in the file, so the page is never blank even if scripts are blocked.

### Fixed

- **Blank page on some devices.** The app read `localStorage` before rendering; browsers that block storage (opening from a `file://` URL, private browsing, or restricted in-app viewers) caused the script to stop and the page to render empty. All storage and history access is now guarded, and a static fallback guarantees visible content.
- **Header clipping.** A CSS class collision between the header bar and the study progress bar was constraining the header height and clipping the title. Renamed and corrected.

### Known limitations

- Miasmatic groups are shown for the 51 remedies the book's Appendix B classifies; the remainder carry no miasm tag.
- Kingdom labels are derived from each remedy's source line and should be treated as a rough filter, not a botanical classification.
- Study progress is stored per browser; it does not sync across devices.
