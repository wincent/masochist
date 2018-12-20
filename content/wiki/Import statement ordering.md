---
tags: wiki javascript
---

1. NPM packages and Node built-ins.
2. Modules in current directory.
3. Modules in parent directory (etc).
4. Type imports.
5. Type exports.
6. Other exports.

```javascript
import fs from 'fs';
import thing from './thing';
import other from '../other';

import type {X} from './X';
import type {A} from '../A';

export type T = string;

export default function foo() {}
```

The rationale from moving from NPM packages, to the current directory, to the parent(s) is to start with the "closest" items first. NPM packages and Node built-ins are "closest" because they are globally accessible everywhere without a relative path. This is next followed by items in the current directory ("./"), then the parent ("../"), then the grandparent ("../../") and so on; the further away we move from the current directory, the longer the prefix.

Note that when accessing items in subdirectories, we sort lexicographically and not by depth:

```javascript
import a from './a/something/very/very/deeply/nested';
import b from './b/something/shallow';
```

Uppercase sorts before lowercase. Note in this example how, even though we're importing `thing`, `z` and `a` here, the order is dictated by the string on the right:

```javascript
import thing from 'Somewhere';
import {z} from 'bar';
import {a} from 'foo';
```

Part of the rationale is that we shouldn't have to move an import just because we add to or remove from the list on the left-hand-side; this keeps diffs small; eg:

```diff
 import {something} from 'a';
-import {x} from 'b';
+import {a, x} from 'b';
 import {other} from 'c';
```
