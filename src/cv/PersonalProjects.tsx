import { h, Component, Fragment } from "nano-jsx";
import { PProject as TPProject } from "../@types/cv.d.ts";

function Project({ project }: { project: TPProject }): Component {
  return (
    <p id={ project.title }>
      <b>{ project.title }</b>
      - { project.description }</p>
  );
}

export function PersonalProjects({ projects }: { projects: TPProject[] }): Component {
  return (
    <>
      <h2>
        Personal Projects
      </h2>
      <div id="projects">
        { projects.map(project => <Project project={ project } />) }
      </div>
    </>
  );
}
