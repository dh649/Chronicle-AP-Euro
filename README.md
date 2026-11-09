# Chronicle AP Euro

A study game for AP European History, built from my Units 2–4 textbook readings, act by act. Unit 1 (Renaissance and Reformation) is written from standard AP Euro coverage and marked "Not from your notes."

## Modes

- **Mastery:** a guided path through all 22 acts in Units 1–4. Each act has four steps: Learn (an interactive story of about 20 cards where you predict outcomes, guess dates, flip term cards, put events and the cause-and-effect chain in order, and lock it in with 3 questions, plus a reading summary), Practice (adaptive questions that repeat your misses), a Mastery Check (9 of 10 to pass), and Write (an AP-style short answer checked against model answers). Mastered acts come back for spaced reviews after 3, 7, 14, and 30 days, and each unit ends with a 20-question unit test.
- **Timeline:** you get one event at a time and drag it onto the timeline where it belongs (or tap a spot on the line). The unit, act, and pages stay hidden until the card is placed. You have 3 lives (or sudden death), and a wrong card still lands in its real spot along with the textbook pages to reread.
- **Event Test:** a hard test on the 125 big events across all 22 acts. Pick your units and a length (Quick 20, every event, or Brutal with each event three ways), in random or chronological order. Questions go both directions: given the name, say what happened, what it led to, who was central, or which detail is true or false; given a description with the name blanked out, pick or type the event's name. Every answer shows the full event card, misses go to Review, and you can retest your misses.
- **Maps:** five maps of Europe (1500, 1650, 1715, 1783, 1815), each with three modes:
  - **Explore:** tap a territory to read what it was like in that year.
  - **Find it:** labels are hidden and you tap the territory it names.
  - **Pin events:** tap where an event happened and get scored by distance.
- **Deep Dives:** 13 complex events, each broken into causes, key players, a dated sequence, results, and why it matters, with a 5-question quiz at the end.
- **People:** 92 key figures. Play "Who am I?" from clues, or browse them by act.
- **Sound:** synthesized sound effects across the app (no audio files), with a mute button that remembers your choice.
- **Review:** collects everything you've missed in any mode (events, people, map regions, quiz questions) so you can drill it.

## Files

- `index.html`: the game (layout, styles, logic)
- `data.js`: timeline events (`E`) and acts (`ACTS`). To add a card, add a row like this:
  `[unit, act, "YYYY-MM-DD", "Title", "One-line blurb", "pp. 000–000", "optional shown date"]`.
  The month and day are optional, and an event with only a year counts as correct anywhere within that year.
- `content.js`: map notes for each era (`ERAS`), event locations (`PLACES`), deep dives (`DIVES`), and people (`PEOPLE`)
- `maps.js`: projected map shapes (`MAPDATA`)
- `story.js`: hand-written Learn story cards for every act (`STORIES`): predictions, why questions, and memory hooks
- `mastery.js`: Mastery lessons for every act (`LESSONS`): big idea, connections, key terms, and short-answer questions with model answers
- `bigevents.js`: Event Test profiles for the big events (`BIG`): what happened, key people, what it led to, true details, and false traps. Titles must match an event in `data.js`.

Open `index.html` in a browser to play. It also works on GitHub Pages with no build step.

## Map data credit

The borders in `maps.js` come from [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik, licensed under GPL-3.0. They were clipped to Europe, simplified, and reprojected. The borders are approximate.
