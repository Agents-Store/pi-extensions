# nocodb-ops (Pi extension)

NocoDB ops plugin for Agents Store. Record management, views, reports, filtering, search, and data import/export for business users via MCP tools and CLI.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/nocodb-ops.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/nocodb-ops.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/nocodb-ops.ts`

## Skills (9)

- `cli-reference` — NocoDB CLI commands and nc command reference from the official NocoDB agent-skills package. Use when:
- "NocoDB CLI commands"
- "nc command reference"
- "NocoDB agent-skills"
- "what CLI commands are available"
- "how to use nc command"

- `examples` — NocoDB workflow examples, scenario walkthroughs, and practical patterns. Use when:
- "show me a NocoDB example"
- "workflow examples"
- "scenario walkthroughs"
- "how do I use NocoDB for..."
- "NocoDB use case"

- `import-export` — Import data into NocoDB tables and export records out. Use when:
- "import CSV into NocoDB"
- "load data into this table"
- "bulk create records"
- "export records to CSV"
- "migrate data between tables"
- "import JSON data"
- "extract all records"
- "download table data"

- `mcp-patterns` — NocoDB MCP tools reference -- available tools, parameters, and usage patterns. Use when:
- "what NocoDB tools are available?"
- "how do I query records?"
- "show me NocoDB MCP parameters"
- "which tool do I use for..."
- "NocoDB tool reference"

- `record-management` — Create, read, update, and delete NocoDB records. Use when:
- "add a new record"
- "create entries in NocoDB"
- "update a record"
- "delete records"
- "bulk import data"
- "search and edit records"
- "how many records match..."

- `search-filter` — NocoDB filter syntax reference for searching, filtering, and sorting records. Use when:
- "filter records"
- "search for records where"
- "NocoDB where clause"
- "how to filter by date"
- "sort results"
- "query syntax"
- "find records matching"
- "filter by status"
- "records created this week"
- "combine multiple filters"

- `setup` — Verify NocoDB connection and MCP setup. Use when:
- "check my NocoDB connection"
- "verify MCP is working"
- "test NocoDB setup"
- "is NocoDB connected?"
- "troubleshoot NocoDB access"

- `troubleshoot` — Diagnose and fix NocoDB errors, connection issues, and MCP problems. Use when:
- "NocoDB not working"
- "connection error"
- "getting 401 error"
- "MCP tool not responding"
- "debug NocoDB"
- "filter not working"
- "timeout error"

- `views-and-reports` — Build reports, summaries, and dashboards from NocoDB data. Use when:
- "create a report"
- "summarize this table"
- "show sales by region"
- "build a dashboard"
- "aggregate data"
- "what views exist on this table?"
- "kanban board"
- "monthly summary"
- "count by category"
- "average order value"


## Not carried over

- 1 agent(s) — no Pi manifest equivalent
- 6 command(s) — no Pi manifest equivalent
- MCP servers — not generated for Pi

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/nocodb-ops
