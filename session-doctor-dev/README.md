# session-doctor-dev (Pi extension)

Read-only audit of a Claude Code session: where it runs, what context it loaded, which model and effort it used, the skills it invoked, every HTTP request with its status code, and the status of each API token seen in the session — with concrete fixes.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/session-doctor-dev.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/session-doctor-dev.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/session-doctor-dev.ts`

## Skills (2)

- `audit` — Audits the current Claude Code session in one command — working directory, loaded CLAUDE.md and rules, skills, subagent types, plugins, hooks, MCP servers (connected, failed, waiting for auth), env variable names by source, the model and effort of the main session and of every subagent with the flag or setting that produced them, and the developer's mistakes with concrete fixes. Use when the user asks to audit, debug or check their Claude Code session, or asks what they are doing wrong.
- `examples` — This skill should be used when the user asks for a "full example", "sample audit", "example session audit", "what does the report look like", "show me a sample report", "example of the session doctor output", "what does a rejected token look like in the audit", or wants to see a complete rendered session audit before running one.


## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/session-doctor-dev
