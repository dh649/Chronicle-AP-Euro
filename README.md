# Chronicle AP Euro

A study game for AP European History, built from my Units 2–4 textbook readings, act by act.

## Modes

- **Timeline:** you get one event at a time and drag it onto the timeline where it belongs (or tap a spot on the line). You have 3 lives (or sudden death), and a wrong card still lands in its real spot along with the textbook pages to reread.
- **Chains:** put each act's "Main Chain to Remember" back in cause-and-effect order.
- **Maps:** five maps of Europe (1500, 1650, 1715, 1783, 1815), each with three modes:
  - **Explore:** tap a territory to read what it was like in that year.
  - **Find it:** labels are hidden and you tap the territory it names.
  - **Pin events:** tap where an event happened and get scored by distance.
- **Deep Dives:** 13 complex events, each broken into causes, key players, a dated sequence, results, and why it matters, with a 5-question quiz at the end.
- **People:** 92 key figures. Play "Who am I?" from clues, or browse them by act.
- **Review:** collects everything you've missed in any mode (events, people, map regions, quiz questions) so you can drill it.

## Files

- `index.html`: the game (layout, styles, logic)
- `data.js`: timeline events (`E`) and acts (`ACTS`). To add a card, add a row like this:
  `[unit, act, "YYYY-MM-DD", "Title", "One-line blurb", "pp. 000–000", "optional shown date"]`.
  The month and day are optional, and an event with only a year counts as correct anywhere within that year.
- `content.js`: map notes for each era (`ERAS`), event locations (`PLACES`), deep dives (`DIVES`), and people (`PEOPLE`)
- `maps.js`: projected map shapes (`MAPDATA`)

Open `index.html` in a browser to play. It also works on GitHub Pages with no build step.

## Map data credit

The borders in `maps.js` come from [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik, licensed under GPL-3.0. They were clipped to Europe, simplified, and reprojected. The borders are approximate.
