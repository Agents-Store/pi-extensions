# image-search-dev (Pi extension)

Stock image and video search developer toolkit. MCP tool patterns for Pexels (9 tools) and Unsplash (4 tools) from mcpware-dev-tools. Photo search, video search, collections, curated content, and MinIO upload integration.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/image-search-dev.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/image-search-dev.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/image-search-dev.ts`

## Skills (4)

- `examples` — This skill should be used when the user asks for "image search examples", "stock photo workflow", "show me how to find images", "media search walkthrough", "pexels usage example", "unsplash usage example", or wants to see end-to-end scenarios for finding and using stock images and videos.
- `mcp-patterns` — This skill should be used when the user asks about "image search MCP tools", "pexels tools", "unsplash tools", "which image search tools are available", "how to find stock photos", "search photos MCP", "stock image tools", "pexels parameters", "unsplash parameters", or needs to know which MCP operations are available for searching stock images and videos.
- `setup` — This skill should be used when the user asks to "verify image search setup", "check pexels connection", "check unsplash MCP", "test image search tools", "is pexels working", "is unsplash working", or needs to confirm that the Pexels and Unsplash MCP tools are operational.
- `troubleshoot` — This skill should be used when the user encounters "pexels error", "unsplash error", "image search not working", "rate limit on stock photos", "stock photo tool not found", "image search rate limited", or needs to diagnose and fix problems with Pexels, Unsplash, or MinIO upload tools.

## Not carried over

- 1 agent(s) — no Pi manifest equivalent

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/image-search-dev
