import { Component, h } from "nano-jsx";

export type TFootnote = {
  text: Component | string;
  index?: number;
};

export function Footnotes({ footnotes }: { footnotes: TFootnote[] }) {
  return (
    <ol>
      {footnotes
        .sort((a, b) => a.index! - b.index!)
        .map(({ text }, index) => <li id={`footnote-${index + 1}`}>{text}</li>)}
    </ol>
  );
}

export const footnoteIndexer = (footnotes: TFootnote[]) =>
  function ({ footnote }: { footnote: TFootnote }) {
    footnote.index = footnote.index ||
      (footnotes.reduce((a, b) => (a.index || 0) < (b.index || 0) ? b : a)
          .index || 0) + 1;
    return (
      <sup>
        <a
          href={`#footnote-${footnote.index}`}
          title={footnote.text}
        >
          [{footnote.index}]
        </a>
      </sup>
    );
  };
