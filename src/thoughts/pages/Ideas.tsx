import { Component, Fragment, h } from "nano-jsx";

type TIdea = {
  title: string;
  notes: string[];
};

export function Ideas(): Component {
  const ideas = [
    {
      title: "Hypothesis for the basis of AGI",
      notes: [
        "Temporal, Curiosity, Failure (Unknown), Growth, Abstraction",
        "Use time to understand entities",
        "Gather other information to find out a solution",
        "AI knows when it does not know the solution",
        "AI able to grow its abilities, e.g. NN increases node count",
        "Understand information without relation to a real concept",
      ],
    },
    {
      title: "Axioms of Good Code",
      notes: [
        "What do the axioms actually mean?",
        "Simplicity",
      ],
    },
    {
      title: "Career Progression Guide",
      notes: [
        "Google problem - Replace an existing system without the same system",
        "Making a complex solution to a simple problem",
        "Promote improvements / robustness to existing systems",
        "Promote varying skill sets",
        "Precise but flexible progression guide - average skill level from sub skills",
      ],
    },
    {
      title: "Nurbs",
      notes: [],
    },
    {
      title: "Addition & Prime numbers",
      notes: [],
    },
    {
      title: "Problems with Mental Health Awareness",
      notes: [
        "By Lucy Foulkes",
        "https://www.youtube.com/watch?v=xH5IM2fnCg8",
      ],
    },
  ]
    .map((i) => <Idea idea={i} />);

  return <>{ideas}</>;
}

function Idea({ idea: { title, notes } }: { idea: TIdea }): Component {
  return (
    <div id={title} class="idea">
      <h2>{title}</h2>
      <ul>
        {notes.map((n) => <li>{n}</li>)}
      </ul>
    </div>
  );
}
