# media-hosting-ops (Pi extension)

Media hosting operations plugin. Upload images by public URL to MinIO-based media hosting via the uploadImageToMinio MCP tool.

## Install

Project-local (auto-discovered once the project is trusted):

```bash
cp -r .pi/ /path/to/your-project/
cp -r skills /path/to/your-project/
```

Global:

```bash
mkdir -p ~/.pi/agent/extensions
cp .pi/extensions/media-hosting-ops.ts ~/.pi/agent/extensions/
```

Note: the extension resolves `skills/` two directories up from itself (`.pi/extensions/media-hosting-ops.ts` -> project root -> `skills/`). For a global install, also copy `skills/` next to `~/.pi/agent/` (i.e. `~/.pi/skills/`), or edit the `skillsDir` line in the extension file.

Quick test without installing: `pi -e ./.pi/extensions/media-hosting-ops.ts`

## Skills (2)

- `examples` — Scenario walkthroughs for media hosting operations. Use when learning how to upload images or seeing practical usage patterns.
- `upload-image` — Use when the user asks to "upload image", "host image", "upload to minio", "image url to hosting", "store image", "upload picture", "get hosted url for image", "save image to hosting", "re-host image", "get a permanent url for image", "I need a stable link for this picture", "minio upload", or needs to upload an image from a public URL to media hosting. Also trigger when the user wants to store an image somewhere reliable, get a permanent/stable URL for a picture, or move an image to their own hosting — even if they don't explicitly say "upload".

## Not carried over

- 1 agent(s) — no Pi manifest equivalent

## Source

Canonical: https://github.com/agents-store/claude-public-plugins/tree/main/plugins/media-hosting-ops
