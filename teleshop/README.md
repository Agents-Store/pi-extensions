# teleshop (Pi extension)

Teleshop store management plugin. Manage products, orders, categories, attributes, customers, webhooks, and addons for your Telegram store via 50 MCP tools.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/teleshop.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/teleshop.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/teleshop.ts`

## Skills (9)

- `addon-management` — Addon and workflow management — listing, toggling, executing, scheduling, and configuring variables. Use when managing store addons, running automation workflows, or configuring addon schedules.
- `attribute-management` — Attribute CRUD, adding attribute values, and variant configuration. Use when creating product attributes like color, size, or material, or managing attribute values.
- `catalog-import` — Full catalog import with categories and products from JSON. Use when importing a complete catalog, migrating from another platform, or bulk-loading products.
- `category-management` — Category CRUD, batch operations, and hierarchy management. Use when creating, updating, deleting, or listing categories in a Teleshop store.
- `customer-management` — Customer listing and details with order history. Use when viewing customer information, searching customers, or checking a customer's order history.
- `examples` — MCP tool call patterns, end-to-end workflow examples, code templates, and scenario references. Use when you need reference implementations for Teleshop operations.
- `order-management` — Order listing, filtering, status updates, payment management, and tracking. Use when viewing orders, changing order status, updating payment, or adding tracking numbers.
- `product-management` — Product CRUD, batch operations, image and attribute management, variants, filtering and sorting. Use when creating, updating, deleting, or listing products in a Teleshop store.
- `webhook-management` — Webhook CRUD, event types, testing, delivery logs, statistics, and toggle. Use when setting up webhooks for order/payment notifications or debugging webhook delivery.

## Not carried over

- 2 agent(s) — no Pi manifest equivalent
- 13 command(s) — no Pi manifest equivalent
- MCP servers — not generated for Pi

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/teleshop
