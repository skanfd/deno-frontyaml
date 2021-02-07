# deno-frontyaml

```typescript
import { parse, stringify } from "./mod.ts";

const md: string = await Deno.readTextFile("example.md");
const parsed = parse(md);
const stringified = stringify(parsed);

console.log("=====================");
console.log("Source");
console.log("=====================");
console.log(md, "\n\n");
console.log("=====================");
console.log("Parsed");
console.log("=====================");
console.log(JSON.stringify(parsed, undefined, 2), "\n\n");
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
title: Deno Manual
summary: Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.
tags:
  - Javascript
  - Typescript
  - V8
  - Rust
  - Tokio
---

# Introduction

Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.

It's built on V8, Rust, and Tokio.

## Feature highlights

- Secure by default. No file, network, or environment access (unless explicitly enabled).
- Supports TypeScript out of the box.
- Ships a single executable (deno).
- Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.
- Scripts can be bundled into a single JavaScript file.
 


=====================
Parsed
=====================
{
  "attributes": {
    "title": "Deno Manual",
    "summary": "Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.",
    "tags": [
      "Javascript",
      "Typescript",
      "V8",
      "Rust",
      "Tokio"
    ]
  },
  "body": "# Introduction\n\nDeno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.\n\nIt's built on V8, Rust, and Tokio.\n\n## Feature highlights\n\n- Secure by default. No file, network, or environment access (unless explicitly enabled).\n- Supports TypeScript out of the box.\n- Ships a single executable (deno).\n- Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).\n- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.\n- Scripts can be bundled into a single JavaScript file."
} 


=====================
Stringified
=====================
---
title: Deno Manual
summary: >-
  Deno is a JavaScript/TypeScript runtime with secure defaults and a great
  developer experience.
tags:
  - Javascript
  - Typescript
  - V8
  - Rust
  - Tokio
---

# Introduction

Deno is a JavaScript/TypeScript runtime with secure defaults and a great developer experience.

It's built on V8, Rust, and Tokio.

## Feature highlights

- Secure by default. No file, network, or environment access (unless explicitly enabled).
- Supports TypeScript out of the box.
- Ships a single executable (deno).
- Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno.
- Scripts can be bundled into a single JavaScript file. 


```