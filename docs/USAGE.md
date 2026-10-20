# Usage

How to open Mnemosyne Companion, study with it, and fix it if it misbehaves.

---

## Opening the app

### Online

Open **[drsamonline.github.io/mnemosyne-companion](https://drsamonline.github.io/mnemosyne-companion/)** in any browser. Nothing to install.

### Offline

1. Download [`dist/Mnemosyne_Companion.html`](../dist/Mnemosyne_Companion.html).
2. Open the downloaded file in a browser — double-click it, or use *File → Open*.

The file is completely self-contained. You can copy it to a phone, a tablet, a USB stick or a laptop with no internet, and it will run exactly the same.

### On a phone

Tap the file and choose **Open in browser** (Chrome, Safari, Firefox, Edge). If your phone offers to open it in a "file viewer", an office app or a preview tool, decline — those often do not run JavaScript and you will see only the plain fallback list.

> **Tip:** once open in your phone browser, use *Add to Home Screen* to keep it one tap away.

### A note on storage

Your study progress and theme choice are saved in the browser's local storage for that device and that browser. If you open the file from a `file://` path, or in private/incognito mode, or inside a restricted in-app viewer, storage may be unavailable — the app still works, it simply will not remember progress between sessions. To keep progress reliably, use the online version, or serve the file from a normal `http(s)` origin.

---

## A study routine

The app is built around the method in the book. A workable daily rhythm:

1. **Open the Study tab.** It shows how many cards are due.
2. **Start a drill.** Twenty cards takes about five minutes.
3. **For each card, recall before you reveal.** Say the keynotes aloud, or write them. The struggle is the point.
4. **Grade honestly.** Marking a card "Good" when it was a struggle is the fastest way to forget it.
5. **Come back tomorrow.** The schedule will have spaced the cards out on its own.

Aim for a few minutes daily rather than an hour once a week — spacing beats massing.

### Suggested first week

| Day | Do this |
|---|---|
| 1 | Browse the Remedies tab; open three cards you know well. |
| 2 | Drill in **Pearl → Remedy** mode, ten cards. |
| 3 | Drill in **Keynotes → Remedy** mode, ten cards. |
| 4 | Open the Diagrams tab and read the four-phase cycle. |
| 5 | Drill in **Remedy → Keynotes** mode, ten cards. |
| 6 | Use the timer for one full protocol session on a single new remedy. |
| 7 | Rest, or clear the due queue. |

---

## Troubleshooting

**The page is blank.**
The app now guards against this, but if you see nothing at all, your browser is likely blocking JavaScript for local files. Try the online version, or open the file in Chrome, Edge, Safari or Firefox. As a guaranteed fallback the file always contains a plain list of all 100 remedies.

**Only a plain list of remedies shows, with no tabs.**
That is the built-in no-JavaScript fallback. Your browser or viewer is not running scripts. Open the file in a proper browser.

**My progress disappeared.**
Storage is per browser and per device. Clearing browsing data, switching browsers, switching devices, or opening from a different path will all show a fresh start. Nothing is lost from the app itself.

**The flashcards keep showing the same cards.**
Cards you grade "Again" return immediately by design. Grade "Good" or "Easy" to space them out.

**Text looks plain or the wrong font.**
The app uses your system's serif and sans-serif fonts deliberately, so that it works offline with no downloads. Appearance varies slightly by device.

**A diagram looks small.**
All diagrams scale to their container. On a phone they are narrower; rotate to landscape for a larger view.

---

## Keyboard and accessibility

- The app is fully usable by keyboard and screen reader: navigation is real buttons, cards are labelled, and every diagram carries a text description.
- Colour is never the only signal — kingdom and miasm are given as text, and the theme has sufficient contrast in both light and dark modes.
- Tap targets meet a comfortable minimum size on phones.

---

## Uninstalling

There is nothing to uninstall. Delete the HTML file. To clear saved progress, clear the site data for the page in your browser settings, or press **Reset progress** on the Study tab.
