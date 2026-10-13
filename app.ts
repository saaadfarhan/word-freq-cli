
import fs from "node:fs/promises";
import { parseArgs } from "node:util";

async function readMyFile(): Promise<[string, number][] | undefined> {
    
    let filename = "file.txt";
    try {
        const { values, positionals } = parseArgs({
            allowPositionals: true,
            options: {
                top: { type: "string", short: "n" },
            },
        });
        filename = positionals[0] ?? "file.txt"
        const top = values.top === undefined ? 5 : Number(values.top);

        if (!Number.isInteger(top) || top < 1) {
            console.error("--top must be a positive integer");
            process.exitCode = 1;
            return;
        }

        const data = await fs.readFile(filename, "utf8");

        const wordMap = new Map<string, number>();
        const skip = new Set(["a", "it", "is", "and", "the", "of"]);

        const words = data
            .toLowerCase()
            .replace(/[^a-z\s]/g, "")
            .split(/\s+/)
            .filter(word => word !== "" && !skip.has(word));

        for (const word of words) {
            wordMap.set(word, (wordMap.get(word) ?? 0) + 1);
        }

        return [...wordMap.entries()]
            .sort((a, b) => b[1] - a[1])
            .slice(0, top);
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            if (error.code === "ENOENT") {
                console.error(`File not found: ${filename}`);

            } else {
                console.error(error.message)
            }

        } else {
            console.error("Error:", error);
        }
        process.exitCode = 1;
        return;
    }
}

const result = await readMyFile();

if (result) {
    for (const [word, count] of result) {
        console.log(`${word}: ${count}`);
    }
}
