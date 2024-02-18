import { Component, Fragment, h, Helmet } from "nano-jsx";
import type {
  Career as TCareer,
  Personal as TPersonal,
  PProject as TPProject,
} from "../../types/cv.d";

import { Personal } from "./Personal";
import { Careers } from "./Career";
import { PersonalProjects } from "./PersonalProjects";

type Page = {
  title: string;
  careers: TCareer[];
  personal: TPersonal;
  projects: TPProject[];
};

function Headers({ page: { title } }: { page: Page }): Component {
  return (
    <Helmet>
      <title>{title}</title>
      <link href={"static/css.css"} rel="stylesheet" />
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
      <br />
      <PersonalProjects projects={projects} />
    </div>
  );
}

// TODO: Add support to hide attributes
export function CV(page: Page): Component {
  return (
    <>
      <Headers page={page} />
      <Body page={page} />
    </>
  );
}
