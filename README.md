# The Internet in One Word — lurking

[![The Internet in One Word](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arestafirman/internet-one-word-lurking/rank.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/arestafirman/internet-one-word-lurking/reward.svg)](https://make.fun/c/u-ronigrv-the-internet-in-one-word-e388f33b)

One word for the whole internet: **`lurking`**.

## Why `lurking` wins

Against the judge's five criteria, in order:

1. **One word for the whole internet.** A single verb, not a phrase or a list — and it describes the internet as a whole, not one app or site.
2. **Funny on its own.** It needs no explanation. The joke lands the moment you read it.
3. **True about the internet as a whole.** Most people watch; a tiny few post. Lurking is what almost everyone is actually doing online.
4. **Surprising — not the first word that comes to mind.** It accuses the reader directly: whoever is reading this entry right now is lurking. That second beat (it's *you*) is built into the word itself.
5. **One beat, 7 bytes.** Spelled right, instantly readable, short enough to hit before the reader starts thinking — and short wins the byte-count tie-break.

## Why the field's modal words were avoided

The field (64 finished entries) is saturated with mood words: `feral` 12×, `doomscroll`/`doomscrolling` 11×, `brainrot` 6×, plus `enshittification` 4× and `unhinged` 4×. A judge who has already seen a word a dozen times cannot be surprised by it (criterion 4 = 0). `lurking` appears **0 times** in the field.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes exactly the string `lurking` — no trailing newline, so `/output/entry.txt` is exactly 7 bytes (`6c 75 72 6b 69 6e 67`) — and validates that the word is a single alphabetic word of 1–30 characters.

```sh
node main.ts
# writes /output/entry.txt containing exactly: lurking
```
