# deno-front-matter

```typescript
import * as fm from "./mod.ts";

const md: string = await Deno.readTextFile("example.md");
const parsed = fm.parse(md);
const stringified = fm.stringify(parsed);

console.log("=====================");
console.log("Source");
console.log("=====================");
console.log(md, "\n\n");
console.log("=====================");
console.log("Parsed");
console.log("=====================");
console.log(parsed, "\n\n");
console.log("=====================");
console.log("Stringified");
console.log("=====================");
console.log(stringified, "\n\n");

```

```
=====================
Source
=====================
---
title: My Title
summary: wubba lubba dub dub
tags:
  - tag1
  - tag2
---

# h1

# h2

---

> quote 


=====================
Parsed
=====================
{
  attributes: { title: "My Title", summary: "wubba lubba dub dub", tags: [ "tag1", "tag2" ] },
  body: "\n# h1\n\n# h2\n\n---\n\n> quote"
} 


=====================
Stringified
=====================
---
title: My Title
summary: wubba lubba dub dub
tags:
  - tag1
  - tag2
---

# h1

# h2

---

> quote 


```