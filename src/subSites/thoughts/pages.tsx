import { Component, Fragment, h, render } from "nano-jsx";
import { Page } from "./components/Page.tsx";
import { TNavigation } from "../../types/thoughts";
import { AdditionPrimeFactors } from "./pages/AdditionPrimeFactors";
import { AGI } from "./pages/AGI";
import { CareerProgression } from "./pages/CareerProgression";
import { FailureEngineer } from "./pages/FailureEngineer";
import { ForEffectiveEngineering } from "./pages/ForEffectiveEngineering";
import { Homepage } from "./pages/Homepage";
import { Ideas } from "./pages/Ideas";
import { Nurbs } from "./pages/Nurbs";
import { ProgrammingAxioms } from "./pages/ProgrammingAxioms";
import { Navigation } from "./components/Navigation";

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
            path: "programming-axioms",
            title: "~ Axioms for Good Code",
            pageContent: <ProgrammingAxioms />,
        },
        {
            path: "for-engineering-communication",
            title: "~ For Effective Engineering",
            pageContent: <ForEffectiveEngineering />,
        },
        {
            path: "premature-abstruction-is-the-root-of-all-evil",
            title: "Premature abstraction is the root of all evil",
            pageContent: <></>,
        },
        {
            path: "abstraction-wrappers-vs-framework",
            title: "Abstractions: Wrappers vs Framework",
            pageContent: <></>,
        },
    ];

    const navigation = <Navigation pages={rawPages} />;

    return rawPages.map(({ path, title, pageContent }) => ({
        path,
        page: (
            <Page title={title} Navigation={navigation}>
                {pageContent}
            </Page>
        ),
    }));
}
