# word-freq-cli

A small Node.js command-line program that reads a text file and prints its most common words.

## Requirements

- Node.js 18 or newer
- pnpm

## Setup

```bash
pnpm install
pnpm build
```

## Usage

The default input file is `file.txt` and the default output contains the five most common words:

```bash
pnpm start
```

Pass a different file as the first positional argument:

```bash
pnpm start -- file2.txt
```

Use `--top` (or `-n`) to choose how many words to print:

```bash
pnpm start -- file.txt --top 10
```

The program lowercases words, removes punctuation, ignores a few common words, and sorts the results by frequency.

## Project structure

```text
app.ts       CLI implementation
file.txt     Example input
file2.txt    Second example input
dist/        Generated JavaScript and declaration files
```

