# deep-research (Pi extension)

Deep Research plugin. Comprehensive web research using 4 providers (Exa, Firecrawl, Jina, Perplexity) with capability-based CONNECTORS pattern and automatic FALLBACK chains. Search, scrape, crawl, extract — each action tries multiple providers until one succeeds.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/deep-research.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/deep-research.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/deep-research.ts`

## Skills (5)

- `content-extraction` — Content reading and extraction guidelines — reading URLs, scraping pages, crawling sites, extracting PDFs, and taking screenshots. Use when reading web content, extracting structured data from pages, or processing documents.
- `deep-research` — Main research automation skill. 7-step algorithm for comprehensive research with 6 research types, query planning, parallel search, extraction, synthesis, and structured reporting. Use when conducting any multi-step research task.
- `examples` — Tool call patterns, end-to-end research workflow examples, and scenario references for all 6 research types. Use when you need reference implementations or complete research examples.
- `report-generation` — Report templates and generation guidelines — Executive Summary, Deep Research Report, and Comparison Table formats with methodology and citation rules. Use when formatting research results into structured reports.
- `search-strategies` — Search strategy guidelines — tool selection, fallback chains, query optimization, and parallel search orchestration. Use when choosing which search tools to use, handling tool failures, or optimizing search queries.

## Not carried over

- 6 command(s) — no Pi manifest equivalent
- MCP servers — not generated for Pi

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/deep-research
