import { h, Component } from "nano-jsx";
import type { Career as TCareer, Personal as TPersonal } from "../@types/cv.d.ts";

import { Personal } from "./Personal.tsx";
import { Careers } from "./Career.tsx";
import { PersonalProjects } from "./PersonalProjects.tsx";

type Page = {
  title: string;
  careers: TCareer[];
  personal: TPersonal;
}

function Headers({ page: { title } }: { page: Page }): Component {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="stylesheet" href="cv.css"/>
    </head>
  )
}

function Body({ page: { careers, personal } }: { page: Page }): Component {
  return (
    <body>
      <div id="cv">
        <Personal personal={personal} />
        <br />
        <Careers careers={careers}  />
      </div>
    </body>
  )
}

// TODO: Add support to hide attributes
export function CV(page: Page): Component {
  return (
    <html lang="en-GB">
      <Headers page={page} />
      <Body page={page} />
    </html>
  );
}
