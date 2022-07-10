import { h, Component, Fragment, Helmet, withStyles } from "nano-jsx";
import type {
  Career as TCareer,
  Personal as TPersonal,
  PProject as TPProject,
} from "../@types/cv.d.ts";

import { Personal } from "./Personal.tsx";
import { Careers } from "./Career.tsx";
import { PersonalProjects } from "./PersonalProjects.tsx";
import { CvCss } from "./css.ts";

type Page = {
  title: string;
  careers: TCareer[];
  personal: TPersonal;
  projects: TPProject[];
}

function Headers({ page: { title } }: { page: Page }): Component {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{ title }</title>
    </Helmet>
  );
}

function Body({ page: { careers, personal, projects } }: { page: Page }): Component {
  const click = () => console.log("Hello!");

  return (
    <div id="cv">
      <Personal personal={ personal } />
      <br />
      <Careers careers={ careers } />
      <br />
      <PersonalProjects projects={ projects } />
    </div>
  );
}

// TODO: Add support to hide attributes
export function CV(page: Page): Component {
  return withStyles(CvCss)(
    <>
      <Headers page={ page } />
      <Body page={ page } />
    </>,
  );
}
