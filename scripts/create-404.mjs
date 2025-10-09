import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const source = join("dist", "index.html");
const destination = join("dist", "404.html");

if (!existsSync(source)) {
  console.error(`Missing build artifact at ${source}. Run \`npm run build\` first.`);
  process.exit(1);
}

try {
  copyFileSync(source, destination);
  console.log("Created dist/404.html for GitHub Pages SPA routing.");
} catch (error) {
  console.error("Failed to create 404.html", error);
  process.exit(1);
}
