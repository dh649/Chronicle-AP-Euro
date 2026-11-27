# Chronicle AP Euro

A study game for AP European History, built from my Units 2–5 textbook readings, act by act. Unit 1 (Renaissance and Reformation) is written from standard AP Euro coverage and marked "Not from your notes."

## How it works (v2.2)

Chronicle is built so you understand each act, not just recognize facts. Every act has five steps:

1. **Understand it:** the act in one page. The big question, what you need to know going in, the turning points in order with the "so what" for each, key people (what they did, why they matter, who they're connected to), how it ended up, and links to the acts before and after.
2. **Rebuild it from memory:** put the turning points in order, match people to what they did, and answer the big question in a few sentences. Pass with 80%.
3. **Remember the main points:** recall-first cards with spaced repetition. Main points (the skeleton's events and people, key terms, the cause-and-effect chain) come first and come back a little more often than details.
4. **Explain it:** why, how, compare, and change-over-time questions, plus "why did this matter?" for every turning point and "who was this?" for every key person, answered in your own words.
5. **Pass the checkpoint:** 15 questions (mostly main points), the turning points in order, and 2 explanations. Pass all three parts and the act is **Ready**. Ready acts keep coming back in your reviews.

Each unit also has a **unit checkpoint**: a 20-question mixed test, turning points from across the unit in order, a short answer, and a thesis.

- **Today:** your next step, plus a daily session of reviews that are due and a little new material, an exam countdown (May 4, 2027), and your streak.
- **Learn:** every act with its status (Not started, Step 2 of 5, Ready), the unit checkpoints, and each unit's big questions. It recommends finishing an act before moving to the next.
- **Exam:** practice in the May 2027 format: source-based multiple choice, short answers, long essays with a thesis drill, and DBQs with a sourcing drill, scored on the real AP rubrics.
- **Claude:** on the Claude-hosted version, Claude grades typed answers, explanations, SAQs, theses, sourcing, and essays. When an explanation misses, Claude coaches you through it one question at a time, and you can ask Claude questions about any act (it answers from your notes). Progress syncs to your Claude account.
- **On GitHub:** there's no Claude here, so you check yourself against key points, model answers, and rubric checklists, and progress is saved in your browser.

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
- `skel_u2.js`, `skel_u3.js`, `skel_u4.js`, `skel_u15.js`: the one-page lesson for every act (`SKEL`): big question, setup, turning points `[year, event title, what happened, so what]`, key people `[name, role, what they did, why it matters, connections]`, results, links to other acts, and the main takeaway. Event titles match `data.js`.
- `und_u1u2.js`, `und_u3u5.js`: understanding questions for every act (`UND`) and each unit's big questions (`UNITQ`): `[kind, question, [key points], model answer]`.
- `exam_mcq.js`: AP-style source-based multiple choice sets (`MCQ`).
- `exam_frq.js`: short answers (`SAQ`), long essays (`LEQ`), and DBQs (`DBQ`) with rubric notes and model theses. Secondary-source passages marked "practice passage" were written for Chronicle; they aren't quotes from real historians.
- `unit5.js`: Unit 5, Act 1 (Women & Family in Early Modern Europe): its events, people, lesson, story cards, deep dives, and Event Test themes. This act is a theme, so only its key dates (1486, 1762, 1792) get date questions.
- `unit5b.js`: Unit 5, Act 2 (Napoleon's Rise & the Haitian Revolution, pp. 392–399): events, people, lesson, story cards, two deep dives, and Event Test profiles. Written from the textbook pages, since there are no class notes for this act yet.
- `nq_u5b.js`, `und_u5b.js`, `exam_u5b.js`: Act 5.2's questions, explain questions (plus two new Unit 5 big questions), and exam practice (a multiple choice set on Napoleon's 1799 proclamation and an SAQ).

Open `index.html` in a browser to play. It also works on GitHub Pages with no build step.

## Map data credit

The borders in `maps.js` come from [historical-basemaps](https://github.com/aourednik/historical-basemaps) by André Ourednik, licensed under GPL-3.0. They were clipped to Europe, simplified, and reprojected. The borders are approximate.
