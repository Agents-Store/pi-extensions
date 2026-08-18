# stack-flask-sqlalchemy-dev (Pi extension)

Flask + SQLAlchemy stack dev plugin for Agents Store. Integration patterns for app factory wiring, blueprint-model coordination, Flask-Login + SQLAlchemy auth, Jinja2 + query data, and full-feature recipes.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/stack-flask-sqlalchemy-dev.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/stack-flask-sqlalchemy-dev.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/stack-flask-sqlalchemy-dev.ts`

## Skills (4)

- `auth-integration` — Use when the user asks about "Flask-Login with SQLAlchemy", "user authentication", "login registration flow", "password hashing", "protect routes", "current_user with database", "session management Flask", or needs patterns for integrating Flask-Login authentication with SQLAlchemy user models.

- `flask-sqlalchemy-wiring` — Use when the user asks about "connect Flask to SQLAlchemy", "Flask-SQLAlchemy wiring", "blueprint model integration", "pass query data to template", "form to database", "render database data in template", "Flask model view pattern", or needs patterns for connecting Flask routes, SQLAlchemy models, and Jinja2 templates.

- `full-feature` — Use when the user asks to "add a new feature", "create a new page", "build CRUD for a new entity", "add a new section to the app", "implement a full feature end-to-end", or needs a step-by-step recipe for building a complete feature across Flask + SQLAlchemy layers.

- `init-project` — Use when the user asks to "set up Flask project", "initialize Flask SQLAlchemy project", "scaffold Flask app", "create Flask project structure", "bootstrap Flask application", or needs to set up a new Flask + SQLAlchemy project from scratch with all integrations wired.


## Not carried over

- 1 agent(s) — no Pi manifest equivalent

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/stack-flask-sqlalchemy-dev
