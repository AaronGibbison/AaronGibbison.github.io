import { Component, Fragment, h, Helmet } from "nano-jsx";
import type {
  Career as TCareer,
  Personal as TPersonal,
  PProject as TPProject,
} from "../../types/cv.d.ts";
import { ovo } from "./details/career-ovo.ts";
import { softwire } from "./details/career-softwire.ts";
import { personal } from "./details/personal.ts";
import { personalProjects } from "./details/projects.ts";

import { Personal } from "./Personal.tsx";
import { Careers } from "./Career.tsx";
import { PersonalProjects } from "./PersonalProjects.tsx";

type Page = {
  title: string;
  careers: TCareer[];
  personal: TPersonal;
  projects: TPProject[];
};

function Headers({ page: { title } }: { page: Page }): Component {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="./static/css.css"
      />
    </Helmet>
  );
}

function Body({ page: { careers, personal, projects } }: {
  page: Page;
}): Component {
  return (
    <div id="cv">
      <Personal personal={personal} />
      <br />
      <Careers careers={careers} />
      {/*<br />*/}
      {/*<PersonalProjects projects={projects} />*/}
    </div>
  );
}

// TODO: Add support to hide attributes
function CV(page: Page): Component {
  return (
    <>
      <Headers page={page} />
      <Body page={page} />
    </>
  );
}

export const CvPage: Component = (
  <CV
    title="CV - Aaron Gibbison"
    personal={personal}
    careers={[ovo, softwire]}
    projects={personalProjects}
  />
);
