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
