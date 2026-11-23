import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke: the "secure" password is too secure for the bank's own limit.
const LINE =
  "My password manager generated a 32-character password that my bank rejected for being too long.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
