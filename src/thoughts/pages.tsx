import { Component, h } from "../deno.ts";
import { Homepage } from "./pages/Homepage.tsx";
import { Ideas } from "./pages/Ideas.tsx";
import { AGI } from "./pages/AGI.tsx";
import { FailureEngineer } from "./pages/FailureEngineer.tsx";
import { Navigation } from "./Components/Navigation.tsx";
import type { TNavigation, TPage } from "../@types/thoughts.d.ts";
import { AdditionPrimeFactors } from "./pages/AdditionPrimeFactors.tsx";
import { CareerProgression } from "./pages/CareerProgression.tsx";
import { Nurbs } from "./pages/Nurbs.tsx";
import { ProblemsMentalHealthAwareness } from "./pages/ProblemsMentalHealthAwareness.tsx";
import { ProgrammingAxioms } from "./pages/ProgrammingAxioms.tsx";

const rawPages: (TNavigation & { Page: (_: TPage) => Component })[] = [
  {
    path: "index",
    title: "Homepage",
    Page: Homepage,
  },
  { path: "ideas", title: "Ideas", Page: Ideas },
  {
    path: "hypothesis-fundamental-agi",
    title:
      "~ Hypothesis for the fundamentals of an Artificial General Intelligence",
    Page: AGI,
  },
  {
    path: "failure-engineer",
    title: "~ Failure as a Software Engineer",
    Page: FailureEngineer,
  },
  {
    path: "addition-prime-factors",
    title: "~ Addition and Prime Factors",
    Page: AdditionPrimeFactors,
  },
  {
    path: "career-progression",
    title: "~ Career Progression",
    Page: CareerProgression,
  },
  {
    path: "nurbs",
    title: "~ Nurbs",
    Page: Nurbs,
  },
  {
    path: "mental-health",
    title: "~ Problems with Mental Health Awareness",
    Page: ProblemsMentalHealthAwareness,
  },
  {
    path: "programming-axioms",
    title: "~ Axioms for Good Code",
    Page: ProgrammingAxioms,
  },
];

const bar = <Navigation pages={rawPages} />;

export const pages: { page: Component; path: string }[] = rawPages.map((
  { path, title, Page },
) => ({
  path,
  page: <Page title={title} Navigation={bar} />,
}));
