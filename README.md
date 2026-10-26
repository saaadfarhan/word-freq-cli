# Word Frequency CLI

A small TypeScript command-line tool that counts words in a local text file and prints the most frequent ones. It is a focused project for practicing file input, command-line arguments, maps, and sorting in Node.js.

## Requirements

- Node.js
- pnpm

## Install and build

```sh
pnpm install
pnpm build
```

## Usage

Run with the default input file, `file.txt`. The default output shows the five most frequent words:

```sh
pnpm start
```

Choose another text file:

```sh
pnpm start -- file2.txt
```

Choose how many results to show with `--top` or `-n`:

```sh
pnpm start -- file.txt --top 10
pnpm start -- file.txt -n 10
```

The count is case-insensitive. The current tokenizer keeps English letters `a`–`z`, removes other characters, and skips these words: `a`, `it`, `is`, `and`, `the`, and `of`. Results are sorted from highest frequency to lowest. The tokenizer and stop-word list are fixed in this version.

## Project files

```text
app.ts       TypeScript CLI source
file.txt     Example input
file2.txt    Second example input
dist/        Generated output from the build
```
