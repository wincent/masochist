---
tags: wiki typescript
title: TypeScript cheatsheet
---

# The `satisfies` operator

From [the v4.9 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html) (with emphasis added):

> The new `satisfies` operator lets us validate that the type of an expression matches some type, _without changing the resulting type of that expression_.

## Example: Catching typos in property names

```typescript
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// Here we catch the typo ("bleu") in the property name:
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
} satisfies Record<Colors, string | RGB>;

// While preserving the `string` type on `palette.green`:
const greenNormalized = palette.green.toUpperCase();
```

Or a variant of the same — catching an invalid property name while using `unknown` to let TS info the types of the keys:

```typescript
type Colors = "red" | "green" | "blue";

// Here we catch that "platypus" is not a valid property name:
const favoriteColors = {
    "red": "yes",
    "green": false,
    "blue": "kinda",
    "platypus": false
} satisfies Record<Colors, unknown>;

// While preserving type info about specific keys:
const g: boolean = favoriteColors.green;
```

## Example: Checking key type irrespective of property name

```typescript
type RGB = [red: number, green: number, blue: number];

// Here we catch that `blue`'s value isn't a valid `RGB` type:
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0]
    //    ~~~~~~ error!
} satisfies Record<string, string | RGB>;

// Note that type info for other values is preserved:
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
```
