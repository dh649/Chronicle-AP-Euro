# Chronicle AP Euro

A study game for AP European History, built from my Units 2–5 textbook readings, act by act. Unit 1 (Renaissance and Reformation) is written from standard AP Euro coverage and marked "Not from your notes."

## How it works (v2.0)

Chronicle is built around understanding the units, not just recognizing facts:

- **Today:** a daily session built for you. It mixes reviews that are due (spaced repetition per item: each fact comes back right before you'd forget it) with a little new material from the acts you're studying, plus a countdown to the AP exam (Tuesday, May 4, 2027) and your streak.
- **Recall first:** every card asks you to answer from memory. Type it or think it, then check. Multiple choice only appears if you ask for it, and a right pick from the choices counts as "Hard" so it comes back sooner. Questions that need choices (like "Which was NOT…") show them right away. Answer choices are length-balanced so the longest answer isn't a tell.
- **Learn:** every act, with three steps: the interactive story, studying the act (recall cards from your notes, events, people, terms, and causes), and **Explain it**: why, how, compare, and change-over-time questions answered in your own words and checked against key points. Each unit also has big questions that connect its acts. Your notes, key terms, events, and people are on each act page.
- **Exam:** practice in the May 2027 format: source-based multiple choice sets (with explanations and the skill tested), short answers (secondary source, primary source, and map or data), long essays with a thesis drill, and DBQs with a sourcing drill. Writing is scored on the real AP rubrics (SAQ 3 points, LEQ 6, DBQ 7).
- **Claude grading:** on the Claude-hosted version, Claude checks typed answers and grades explanations, SAQs, theses, sourcing, and full essays. Here on GitHub there's no Claude, so you compare with model answers and rubric checklists and grade yourself. Progress syncs to your Claude account on the Claude-hosted version; here it's saved in your browser.
- **Games:** the original modes below, kept as extra practice.

## Games

- **Timeline:** you get one event at a time and drag it onto the timeline where it belongs (or tap a spot on the line). The unit, act, and pages stay hidden until the card is placed. You have 3 lives (or sudden death), and a wrong card still lands in its real spot along with the textbook pages to reread.
- **Event Test:** a hard test on the big events and themes across every act (144 in all). Pick your units and a length (Quick 20, every event, or Brutal with each event three ways), in random or chronological order. Questions go both directions: given the name, say what happened, what it led to, who was central, or which detail is true or false; given a description with the name blanked out, pick or type the event's name. Every answer shows the full event card, misses go to Review, and you can retest your misses.
- **Maps:** five maps of Europe (1500, 1650, 1715, 1783, 1815), each with three modes:
  - **Explore:** tap a territory to read what it was like in that year.
  - **Find it:** labels are hidden and you tap the territory it names.
  - **Pin events:** tap where an event happened and get scored by distance.
- **Deep Dives:** 19 complex events and themes, each broken into causes, key players, a dated sequence, results, and why it matters, with a 5-question quiz at the end.
- **People:** 138 key figures. Play "Who am I?" from clues, or browse them by act.
- **Match:** a Quizlet-style race. Pick units and a 16- or 20-card board, then tap a person and what they're known for. Matched pairs disappear, a wrong match adds 1 second, and your best time is saved for each setup. People you mix up go to Review.
- **Sound:** synthesized sound effects across the app (no audio files), with a mute button that remembers your choice.
- **Review:** collects everything you've missed in any mode (events, people, map regions, quiz questions) so you can drill it.

## Files

- `index.html`: the app (layout, styles, logic, spaced repetition, exam practice)
- `data.js`: timeline events (`E`) and acts (`ACTS`). To add a card, add a row like this:
  `[unit, act, "YYYY-MM-DD", "Title", "One-line blurb", "pp. 000–000", "optional shown date"]`.
  The month and day are optional, and an event with only a year counts as correct anywhere within that year.
- `content.js`: map notes for each era (`ERAS`), event locations (`PLACES`), deep dives (`DIVES`), and people (`PEOPLE`)
- `maps.js`: projected map shapes (`MAPDATA`)
- `story.js`: hand-written Learn story cards for every act (`STORIES`): predictions, why questions, and memory hooks
- `mastery.js`: Mastery lessons for every act (`LESSONS`): big idea, connections, key terms, and short-answer questions with model answers
- `bigevents.js`: Event Test profiles for the big events (`BIG`): what happened, key people, what it led to, true details, and false traps. Titles must match an event in `data.js`.
- `notesdata.js`: the Khare + Harris notes parsed act by act (`NOTES`) and each act's Main Characters (`NCHAR`).
- `nq_u2a.js` … `nq_u5.js`: questions written from the notes (`NQ`), one row per question: `[section, question, right answer, wrong 1, wrong 2, spare wrong]`. Choices show the right answer plus wrong 1 and 2.
- `und_u1u2.js`, `und_u3u5.js`: understanding questions for every act (`UND`) and each unit's big questions (`UNITQ`): `[kind, question, [key points], model answer]`.
- `exam_mcq.js`: AP-style source-based multiple choice sets (`MCQ`).
- `exam_frq.js`: short answers (`SAQ`), long essays (`LEQ`), and DBQs (`DBQ`) with rubric notes and model theses. Secondary-source passages marked "practice passage" were written for Chronicle; they aren't quotes from real historians.
- `unit5.js`: Unit 5, Act 1 (Women & Family in Early Modern Europe): its events, people, lesson, story cards, deep dives, and Event Test themes. This act is a theme, so only its key dates (1486, 1762, 1792) get date questions.

Open `index.html` in a browser to play. It also works on GitHub Pages with no build step.

## Map data credit

The borders in `maps.js` come from [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik, licensed under GPL-3.0. They were clipped to Europe, simplified, and reprojected. The borders are approximate.
