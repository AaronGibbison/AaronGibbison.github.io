import { Component, h } from "nano-jsx";
import { Homepage } from "./pages/Homepage.tsx";
import { Ideas } from "./pages/Ideas.tsx";
import { AGI } from "./pages/AGI.tsx";
import { FailureEngineer } from "./pages/FailureEngineer.tsx";
import { Navigation } from "./components/Navigation.tsx";
import type { TNavigation } from "../@types/thoughts.d.ts";
import { AdditionPrimeFactors } from "./pages/AdditionPrimeFactors.tsx";
import { CareerProgression } from "./pages/CareerProgression.tsx";
import { Nurbs } from "./pages/Nurbs.tsx";
import {
  ProblemsMentalHealthAwareness,
} from "./pages/ProblemsMentalHealthAwareness.tsx";
import { ProgrammingAxioms } from "./pages/ProgrammingAxioms.tsx";
import { Page } from "./components/Page.tsx";
import { ForEffectiveEngineering } from "./pages/ForEffectiveEngineering.tsx";

export function generateThoughtPages() {
  const rawPages: (TNavigation & { pageContent: Component })[] = [
    {
      path: "index",
      title: "Homepage",
      pageContent: <Homepage />,
    },
    { path: "ideas", title: "Ideas", pageContent: Ideas },
    {
      path: "hypothesis-fundamental-agi",
      title:
        "~ Hypothesis for the fundamentals of an Artificial General Intelligence",
      pageContent: <AGI />,
    },
    {
      path: "failure-engineer",
      title: "~ Failure as a Software Engineer",
      pageContent: <FailureEngineer />,
    },
    {
      path: "addition-prime-factors",
      title: "~ Addition and Prime Factors",
      pageContent: <AdditionPrimeFactors />,
    },
    {
      path: "career-progression",
      title: "~ Career Progression",
      pageContent: <CareerProgression />,
    },
    {
      path: "nurbs",
      title: "~ Nurbs",
      pageContent: <Nurbs />,
    },
    {
      path: "mental-health",
      title: "~ Problems with Mental Health Awareness",
      pageContent: <ProblemsMentalHealthAwareness />,
    },
    {
      path: "programming-axioms",
      title: "~ Axioms for Good Code",
      pageContent: <ProgrammingAxioms />,
    },
    {
      path: "for-engineering-communication",
      title: "~ For Effective Engineering",
      pageContent: <ForEffectiveEngineering />,
    },
  ];

  const navigation = <Navigation pages={rawPages} />;

  return rawPages.map(({ path, title, pageContent }) => ({
    path,
    page: <Page title={title} Navigation={navigation}>{pageContent}</Page>,
  }));
}
