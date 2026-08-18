# chatwoot-dev (Pi extension)

Chatwoot dev plugin for Agents Store. Full REST API coverage (Application, Platform, and Public/Client APIs) with bundled OpenAPI specs, official chatwoot CLI recipes, webhook & agent-bot automation, and troubleshooting for developers building on Chatwoot. Authenticates with the api_access_token header via CHATWOOT_API_KEY against CHATWOOT_BASE_URL.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/chatwoot-dev.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/chatwoot-dev.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/chatwoot-dev.ts`

## Skills (6)

- `api-reference` — This skill should be used when the user asks for "Chatwoot API endpoints", "Chatwoot REST API", "Chatwoot curl examples", "Chatwoot Application/Platform/Public API", "Chatwoot API documentation", or needs specific HTTP endpoint, request, or response details for Chatwoot.
- `cli-recipes` — This skill should be used when the user asks about the "Chatwoot CLI", "chatwoot command line", "chatwoot convs/conv/contact commands", "triage Chatwoot from the terminal", "run Chatwoot in CI", or needs ready-to-use `chatwoot` CLI commands, the noun/verb grammar, output-format rules, or safety guidance for customer-visible writes.
- `examples` — This skill should be used when the user wants a worked, end-to-end Chatwoot example — "show me a full Chatwoot integration", "seed a conversation via the API", "build a Chatwoot bot example", "bulk import contacts", or "triage Chatwoot from the terminal" — combining setup, the REST API, the CLI, and webhooks into a complete scenario.
- `setup` — This skill should be used when the user asks to "set up Chatwoot API", "get a Chatwoot access token", "configure CHATWOOT_API_KEY", "install the Chatwoot CLI", "connect to Chatwoot", "verify Chatwoot is working", or needs to obtain credentials and confirm REST API / CLI access to a Chatwoot account (cloud or self-hosted).
- `troubleshoot` — This skill should be used when the user hits "Chatwoot API errors", "Chatwoot 401/403/404", "Chatwoot CLI not working", "Chatwoot webhook signature mismatch", "Chatwoot token not authorized", or needs to diagnose and fix problems with the Chatwoot API, CLI, or webhooks.
- `webhooks-automation` — This skill should be used when the user wants to "set up a Chatwoot webhook", "verify a Chatwoot webhook signature", "build a Chatwoot agent bot", "handle Chatwoot events", "create an automation rule", or build event-driven integrations and bots on top of Chatwoot (webhooks, automation rules, agent bots, integration hooks).

## Not carried over

- 1 agent(s) — no Pi manifest equivalent
- 2 command(s) — no Pi manifest equivalent

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/chatwoot-dev
