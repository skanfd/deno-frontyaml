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
