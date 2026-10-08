# Domain glossary

- **Content**: the facts the portfolio presents (profile, projects, skills, experience, achievements, socials). Lives only in `src/content.js`; every rendering derives from it.
- **Rendering**: one way Content is shown. There are three: the terminal, the static HTML (screen readers and crawlers), and the JSON-LD (structured data).
- **Command**: one row of the command table (`src/commands.js`): name, help description, chip visibility, and what it does when run.
- **Session**: the terminal's behaviour (dispatch, history, completion, input lock), independent of the DOM.
- **Screen**: what a Session writes to (`print`, `clear`, `setBusy`). Two adapters: the DOM (`src/dom-screen.js`) and an in-memory one for tests (`test/memory-screen.js`).
