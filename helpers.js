import { promises as fs } from "node:fs";

import { FILEPATH } from "./config.js";

export async function readSongs() {
  try {
    const data = await fs.readFile(FILEPATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
}

export async function writeSongs(data) {
  try {
    await fs.writeFile(FILEPATH, JSON.stringify(data), "utf8");
    return true;
  } catch {
    console.error("Error writing file:", error);
    return false;
  }
}
