# mem0-ops (Pi extension)

Mem0 memory management plugin. Store, search, update, and organize memories with semantic search, batch operations, file attachments, and change history tracking via MCP tools.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/mem0-ops.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/mem0-ops.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/mem0-ops.ts`

## Skills (5)

- `examples` — Tool call patterns, end-to-end workflow examples, and scenario references. This skill should be used when the user needs reference implementations, complete examples, or tool call patterns.
- `file-management` — File management — attach files to memories and search file content via vector search. This skill should be used when the user asks to upload documents, attach files, or search within attached files.
- `history-tracking` — Memory history and change tracking — view evolution of memories over time, audit modifications, and track knowledge changes. This skill should be used when the user asks to see memory changes, audit modifications, or track how information evolved.
- `memory-crud` — Memory CRUD operations — add, get, update, delete memories, and batch operations. This skill should be used when the user asks to create, read, update, or delete memories, or perform bulk memory management.
- `search-retrieval` — Search and retrieval — semantic search, listing, filtering, and relevance tuning. This skill should be used when the user asks to find memories, search knowledge, list stored information, or tune search results.

## Not carried over

- 2 agent(s) — no Pi manifest equivalent
- 11 command(s) — no Pi manifest equivalent
- MCP servers — not generated for Pi

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/mem0-ops
