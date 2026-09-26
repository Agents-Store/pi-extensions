// Auto-generated Pi extension for the "project-template-dev" plugin.
// Registers this plugin's skills/ directory with Pi's native skill loader via the
// resources_discover event. Docs: https://pi.dev/docs/latest/extensions
//
// Install: copy this whole directory's .pi/ and skills/ into a project root for project-local
// auto-discovery (.pi/extensions/*.ts is auto-discovered once the project is trusted), or copy
// just this file into ~/.pi/agent/extensions/ for a global install (see README.md for the
// skills/ path caveat that applies to a global install).
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

const extensionDir = dirname(fileURLToPath(import.meta.url));
const packageRoot = resolve(extensionDir, "..", "..");
const skillsDir = resolve(packageRoot, "skills");

export default function projectTemplateDevExtension(pi: ExtensionAPI) {
  pi.on("resources_discover", async () => ({
    skillPaths: [skillsDir],
  }));
}
