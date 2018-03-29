---
tags: blog security
title: Passphrase entropy
twitter: https://twitter.com/wincent/status/979261675374198784
---

A while back I was interested in coming up with a passphrase that would result in the same keypresses when typed on Colemak and Qwerty keyboard layouts. I concluded that it would be too hard to get a reasonable amount of entropy because there are only 13 keys that hold the same position in both layouts.

Tonight on a whim I went back to perform a more precise calculation using this quick and dirty script:

```javascript
#!/usr/bin/env node

const {readFileSync} = require('fs');

const qwerty = `
  qwertyuiop
  asdfghjkl;
  zxcvbnm,./
`;

const colemak = `
  qwfpgjluy;
  arstdhneio
  zxcvbkm,./
`;

const normalize = layout => layout.replace(/\s+/g, '').split('');
const getCommon = (a, b) => a.filter((char, index) => char === b[index]);
const escape = char => char === '.' ? '\\.' : char;

const chars = getCommon(normalize(qwerty), normalize(colemak));
const regexp = new RegExp('^[' + chars.map(escape).join('') + ']+$');

const words = readFileSync('/usr/share/dict/words')
  .toString()
  .split(/\s+/)
  .map(s => s.toLowerCase());

const filtered = words.filter(word => word.match(regexp));

console.log(
  `Of ${words.length} words,\n` +
  `${filtered.length} words contain only ${chars.length} common keys\n` +
  `(${chars.join(', ')}).\n`
);

filtered.forEach(word => {
  console.log(`  ${word}`);
});

console.log('\nEntropy (bits) for an n-word passphrase:\n');
const bitsPerWord = Math.floor(Math.log2(filtered.length));
for (let i = 1; i < 10; i++) {
  console.log(`${i} word${i > 1 ? 's': ''}: ${bitsPerWord * i} bits`);
}

console.log(
  '\nFor comparison, dictionary words each have about 14 bits of entropy\n' +
  '(source: https://security.stackexchange.com/a/62911/151988).'
);
```

What's this script doing? It's scanning through the 235,887 words in `/usr/share/dict/words` and collecting the pool of just 132 words that contain only characters common to both Colemak and Qwerty, then printing out some entropy info at the end for passphrases of different word lengths.

For those too lazy to run it, here's the output:

```plain
Of 235887 words,
132 words contain only 13 common keys
(q, w, a, h, z, x, c, v, b, m, ,, ., /).

  a
  a
  aa
  aam
  ab
  aba
  abac
  abaca
  abama
  abb
  abba
  abwab
  acca
  ach
  ah
  ah
  aha
  am
  ama
  amah
  amba
  amma
  amma
  ava
  aw
  awa
  ax
  azha
  b
  b
  ba
  baa
  bab
  baba
  bac
  bacaba
  bacach
  bacca
  bach
  bah
  baham
  bahama
  bam
  baw
  bhava
  c
  c
  ca
  caam
  caama
  cab
  caba
  caca
  cacam
  cachaza
  cam
  camaca
  camb
  cava
  caw
  caza
  cha
  chaa
  chab
  chac
  chacma
  cham
  cham
  chama
  chamma
  chaw
  cwm
  h
  h
  ha
  haab
  habab
  hah
  ham
  hammam
  hamza
  haw
  hawm
  hwa
  m
  m
  ma
  ma
  maam
  mab
  maba
  mac
  mac
  macaca
  macaw
  mah
  maha
  mam
  mamba
  mamma
  maw
  max
  maza
  mazama
  mwa
  q
  q
  v
  v
  w
  w
  wa
  wa
  waac
  wab
  wac
  wah
  waw
  wawa
  wawah
  wax
  waxhaw
  wha
  wham
  x
  x
  z
  z
  za
  zac
  zach
  zax

Entropy (bits) for an n-word passphrase:

1 word: 7 bits
2 words: 14 bits
3 words: 21 bits
4 words: 28 bits
5 words: 35 bits
6 words: 42 bits
7 words: 49 bits
8 words: 56 bits
9 words: 63 bits

For comparison, dictionary words each have about 14 bits of entropy
(source: https://security.stackexchange.com/a/62911/151988).
```

What can we conclude from all this?

- If we drew words directly from `/usr/share/dict/words` without regard to layout, we could get an excellent 17 bits of entropy per word (for comparison, the word list used by 1Password is apparently only large enough to deliver about 14 bits per word). Unfortunately, many of the words in this list aren't practical to use (consider an early example like "abdominohysterectomy", which nobody is ever going to accept), so we're not really claiming 17 bits of entropy in the real world.
- Our Colemak/Qwerty hybrid words have about half the entropy per word (a measly 7 bits), meaning that you need your passphrase to be twice as long to match the entropy you'd get with standard dictionary words: for 56 bits of entropy, for example, you'd need an 8-word passphrase instead of a 4-word one. It's not going to be particularly memorable either, as it will end up being something like "mamba waxhaw zax macaca habab cachaza wab azha". I'll grant that that's pretty fun to say out loud, but that's not a redeeming quality for a passphrase.
- I guess we could inject more entropy by adding numbers and symbols, but the base set of words to draw from is still sucky.

I'm going to stick to my boring existing passphrase for now. For reference, and in case I forget it, it is "rosemary horde shotgun portrait".

<small><em>Discuss: [Twitter](https://twitter.com/wincent/status/979261675374198784)</em></small>
