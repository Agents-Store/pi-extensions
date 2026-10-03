# sqlalchemy-dev (Pi extension)

SQLAlchemy dev plugin for Agents Store. Typed SQLAlchemy 2.0 style (Mapped, mapped_column, select) with a SQLAlchemy 2.1 section: model definition patterns, relationship mapping, query optimization, Alembic migrations, and troubleshooting.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/sqlalchemy-dev.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/sqlalchemy-dev.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/sqlalchemy-dev.ts`

## Skills (6)

- `api-reference` — Use when the user asks for "SQLAlchemy API reference", "mapped_column options", "SQLAlchemy column types", "SQLAlchemy session methods", "db.session API", "SQLAlchemy relationship options", "lazy loading strategies", or needs specific SQLAlchemy framework API details.

- `cli-recipes` — Use when the user asks about "Alembic commands", "database migrations", "flask db migrate", "flask db upgrade", "create migration", "rollback migration", "alembic check", "SQLAlchemy CLI", or needs ready-to-use database migration commands.

- `model-patterns` — Use when the user asks about "SQLAlchemy models", "define database model", "Mapped and mapped_column", "DeclarativeBase", "SQLAlchemy relationships", "one-to-many relationship", "many-to-many", "SQLAlchemy column types", "model constraints", "Flask-SQLAlchemy model", "convert db.Column to Mapped 2.0 style", "upgrade to SQLAlchemy 2.1", "Flask-Login User model", "models owned by a user", or needs patterns for defining database models with SQLAlchemy.

- `query-patterns` — Use when the user asks about "SQLAlchemy queries", "filter records", "SQLAlchemy select", "session.scalars", "join tables", "aggregate query", "order by", "pagination", "N+1 query problem", "eager loading", "SQLAlchemy session", "bulk insert", "convert Model.query to select() 2.0 style", "upgrade to SQLAlchemy 2.1", "filter queries by current user", "owner-scoped queries", or needs patterns for querying data with SQLAlchemy.

- `setup` — Use when the user asks to "verify SQLAlchemy setup", "check database connection", "is SQLAlchemy configured correctly", "test database setup", "which SQLAlchemy version", "SQLAlchemy 2.1", or needs to confirm that SQLAlchemy is properly initialized in their Python project.

- `troubleshoot` — Use when the user encounters "SQLAlchemy errors", "database error", "OperationalError", "IntegrityError", "DetachedInstanceError", "AmbiguousColumnError", "LegacyAPIWarning", "No module named psycopg", "SQLAlchemy not working", "migration error", "debug SQLAlchemy", or needs to diagnose and fix common SQLAlchemy problems.


## Not carried over

- 1 agent(s) — no Pi manifest equivalent

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/sqlalchemy-dev
