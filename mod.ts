import { yaml } from "./deps.ts";

interface Markdown {
  attributes: Record<string, unknown>;
  body: string;
  //   bodyBegin: number;
  // frontmatter: string;
}

export function parse(md: string): Markdown {
  const [drop, frontmatter, ...body] = md.split(/(?<=^|\n)\-{3}\s*?\n/g);
  return {
    attributes: (yaml.parse(frontmatter) || {}) as Record<string, unknown>,
    body: body.join("---\n") || "",
    // frontmatter: frontmatter || "",
  };
}

export function stringify(md: Markdown) {
  const lines: string[] = [];
  lines.push("---\n");
  lines.push(yaml.stringify(md.attributes));
  lines.push("---\n");
  lines.push(md.body);
  return lines.join("");
}
