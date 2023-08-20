import type {
  Career as TCareer,
  Project as TProject,
} from "../../types/cv.d.ts";
import { Component, Fragment, h } from "nano-jsx";

export function Careers({ careers }: { careers: TCareer[] }): Component {
  const careersHtml: Component[] = careers
    .sort((a, b) => b.start.valueOf() - a.start.valueOf())
    .map((c) => <Career career={c} />);

  return (
    <div class="careers">
      {careersHtml}
    </div>
  );
}

function Career({ career }: { career: TCareer }): Component {
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
  });

  const startDate = dateFormat.format(career.start);
  const endDate = career.end ? dateFormat.format(career.end) : "Present";

  const isSingleProject = career.projects.length === 1;

  const projects = career.projects
    .sort((a, b) => a.priority - b.priority)
    .map((project) => (
      <Project
        isSingleProject={isSingleProject}
        project={project}
      />
    ));

  return (
    <div class="career" id={career.company}>
      <div class="heading">
        <h2 class="company">{career.company}</h2>
        <p class="role">{career.title}</p>
        <p class="date">{startDate} - {endDate}</p>
      </div>
      <p class="description">{career.description}</p>
      <div class="projects">{projects}</div>
    </div>
  );
}

function Project({ isSingleProject, project }: {
  isSingleProject: boolean;
  project: TProject;
}): Component {
  return (
    <div class="project" id={project.label}>
      <div class="header">
        {isSingleProject ? "" : (
          <>
            <h3 class="title">Project:</h3>
            <h3>{project.label}</h3>
          </>
        )}
        <h4 class="tech">Technology:</h4>
        <h4>{project.skills.join(", ")}</h4>
      </div>
      <ul class="notables">
        {project.notables.map((n) => <li>{n}</li>)}
      </ul>
    </div>
  );
}
