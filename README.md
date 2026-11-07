# Chronicle AP Euro

A timeline game for AP European History, built from my Units 2–4 textbook readings, act by act.

## Modes

- **Timeline:** you get one event at a time and place it where it belongs. You have 3 lives (or sudden death), and a wrong card still lands in its real spot along with the textbook pages to reread.
- **Chains:** put each act's "Main Chain to Remember" back in cause-and-effect order.
- **Review:** every card you miss is saved here, and you can drill just those cards until you clear them.

## Files

- `index.html`: the game (layout, styles, logic)
- `data.js`: the events (`E`) and acts (`ACTS`). To add a card, add a row like this:
  `[unit, act, "YYYY-MM-DD", "Title", "One-line blurb", "pp. 000–000", "optional shown date"]`.
  The month and day are optional, and an event with only a year counts as correct anywhere within that year.

Open `index.html` in a browser to play. It also works on GitHub Pages with no build step.
