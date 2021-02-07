import { yaml, YAMLError } from "./deps.ts";
export { YAMLError };

interface Markdown {
  attributes: Record<string, unknown>;
  body: string;
}

/**
 * Return body offset, zero if front matter not exists.
 */
export function find(md: string): number {
  const re = /^\-{3}\s*?\n(.|\n)*?\n\-{3}\s*?\n?/g;
  re.exec(md);
  return re.lastIndex;
}

/**
 * Throw YAMLError if front matter invaliated.
 */
export function parse(md: string): Markdown {
  let attributes = {};
  const pos = find(md);
  if (pos) {
    const front: string =
      (/(?<=^\-{3}\s*?\n)(.|\n)*?\n(?=\-{3}\s*?\n?)/.exec(md) as string[])[0];
    const parsed = yaml.parse(front) as Record<string, unknown>;
    attributes = parsed || {};
  }
  return { attributes, body: md.slice(pos).trim() };
}

export function stringify({ attributes, body }: Markdown) {
  const empty: boolean = Object.keys(attributes).length === 0;
  const front: string = empty
    ? ""
    : `---\n${yaml.stringify(attributes)}---\n\n`;
  return `${front}${body}`;
}

export default { find, parse, stringify, YAMLError };
