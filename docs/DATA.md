# Data

Where the remedy material comes from, how it is structured, and what its limits are.

---

## Provenance

Every field in the app is derived from the book **_Mnemosyne Materia Medica_** by Dr. Sohil Momin. The app carries the **study layer** of each remedy — pearl, keynotes, modalities, differentials and miasm group — and deliberately leaves the full clinical descriptions, memory hacks and case histories in the text.

The underlying remedy pictures rest on the classical, public-domain homoeopathic materia medica: Hahnemann, Boericke, Kent, Clarke, Allen, Nash and Boger. See [NOTICE.md](../NOTICE.md) for the full list.

## Structure

The 100 remedies are embedded in the app as a single JSON array. Each entry looks like this:

```json
{
  "n": 1,
  "name": "Aconitum Napellus",
  "source": "Ranunculaceae. Monkshood (Wolfsbane). Prepared from the whole fresh plant at the time of flowering.",
  "family": "Ranunculaceae",
  "kingdom": "Plant",
  "miasm": [],
  "pearl": [
    "A midnight wind, and the body turns to stone,",
    "The heart drums fear of dying, all alone.",
    "What came like lightning leaves as it began.",
    "No trace by morning, save the shaken man."
  ],
  "trigger": "Cold dry wind, sudden terror, \u201cI am dying\u201d, dry burning skin, midnight onset. Any one of these should surface the full picture.",
  "keynotes": [ "…", "…", "…" ],
  "worse": "cold dry wind, night (especially midnight and after), tobacco smoke, crowds, music",
  "better": "open air, rest, warm perspiration, which heralds recovery",
  "crossrefs": [ "vs. Belladonna: …", "vs. Arsenicum album: …", "vs. Coffea cruda: …" ]
}
```

### Fields

| Field | Type | Notes |
|---|---|---|
| `n` | integer | Position in the book, 1–100. |
| `name` | string | The remedy name as it appears in the book. |
| `source` | string | The source line: family, common name, preparation. |
| `family` | string | The family, taken from the first phrase of `source`. |
| `kingdom` | string | `Plant`, `Mineral`, `Animal` or `Nosode`. Derived — see below. |
| `miasm` | array | Zero or more of `Psoric`, `Sycotic`, `Syphilitic`, `Tubercular`. |
| `pearl` | array | Four lines of verse. |
| `trigger` | string | The retrieval trigger. |
| `keynotes` | array | Eight keynotes per remedy. |
| `worse` | string | The worse modality, if the book gives one. |
| `better` | string | The better modality, if the book gives one. |
| `crossrefs` | array | The differentials, each beginning `vs.`. |

## Coverage and limitations

**Keynotes** — all 100 remedies carry eight.

**Pearls** — all 100 remedies carry a four-line pearl.

**Differentials** — all 100 remedies carry at least two; most carry three.

**Miasmatic groups** — shown for the **51** remedies that Appendix B of the book classifies. The remaining remedies carry an empty `miasm` array and simply show no miasm tag. The groupings follow Hahnemann's three-miasm framework as extended by Kent, Burnett and later prescribers, exactly as set out in the book.

**Kingdom** — this is a *derived* field, not one the book states. It is inferred from each remedy's source line: a source beginning with a botanical family name (ending in `-aceae`) is treated as plant; known mineral and chemical terms as mineral; known animal and nosode sources as animal and nosode respectively. Treat it as a convenient filter, not a botanical classification.

**Modalities** — where the book presents worse and better together, they are split into the two fields. A few remedies state only one, and the other field is left empty.

## Editorial rules followed

The app reproduces the book's text as it stands after the book's own editorial pass, including its British `-ise` orthography and its `homoeopathy` spelling. Em-dashes were replaced with commas during production, and headings were freed of `#` markers and dashed numbering. No clinical wording was altered for the app.

## Rebuilding

The data is extracted from the book's master HTML and embedded at build time. The pipeline is:

1. Parse the book's master HTML into structured remedy records.
2. Parse Appendix B for the miasmatic groupings.
3. Derive the kingdom from each source line.
4. Inject the resulting JSON into the app template, together with a static no-JavaScript fallback list.

Because the data is embedded rather than fetched, the app needs no server and no network access.

## Accuracy

The remedy material was checked against the classical materia medica during production of the book, and a number of pictures were corrected at that stage. Where the app and any other source disagree, **the book governs**, and the classical authors govern the book.
