import type { Career, Personal } from "../@types/cv.d.ts";

import { personal } from "./details/personal.ts";
import { softwire } from "./details/career-softwire.ts";
import { ovo  } from "./details/career-ovo.ts";
import { h, Component, Fragment } from "../deno.ts";

function Personal({ personal }: { personal: Personal }): Component {
  return (
    <div id="personal">
      <h1>Name: {personal.name}</h1>
      <h2>Email: {personal.email}</h2>
      <h2>Mobile: {personal.mobile}</h2>
      <h2>Education: Self-taught</h2>
    </div>
  )
}

function Career(career: Career): Component {
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
  });

  const projects = career.projects
    .sort((a, b) => a.priority - b.priority)
    .map((project) => (
      <div class="project" id={project.label}>
        <div class="header">
          {
          career.projects.length > 1
            ? (<>
              <h3 class="title">Project:</h3>
              <h3>{project.label}</h3>
            </>)
            : ""
        }
          <h4 class="tech">Technology:</h4>
          <h4>{project.skills.join(", ")}</h4>
        </div>
        <ul class="notables">
          {project.notables.map((n) => <li>{n}</li>)}
        </ul>
      </div>
    ));

  return (
    <div class="career" id={career.company}>
      <div class="heading">
        <h2 class="company">{career.company}</h2>
        <p class="role">{career.title}</p>
        <p class="date">{dateFormat.format(career.start)} - {
        career.end ? dateFormat.format(career.end) : "Present"
      }</p>
      </div>
      <p class="description">{career.description}</p>
      <div class="projects">
        {projects}
      </div>
    </div>
  );
}

function Headers({title}: {title: string}) {
  return (
    <head>
      <title>{title}</title>
      <link rel="stylesheet" href="cv.css"/>
    </head>
  )
}

function Body() {
  const careersHtml: Component[] =
    [ovo, softwire]
    .sort((a, b) => b.start.valueOf() - a.start.valueOf())
    .map(Career);

  return (
    <div id="cv">
      <Personal personal={personal} />
      <div class="careers">
        {careersHtml}
      </div>
    </div>
  )
}

export function Cv() {
  return (
    <html lang="en-GB">
      <Headers title="CV - Aaron Gibbison" />
      <Body />
    </html>
  );
}
