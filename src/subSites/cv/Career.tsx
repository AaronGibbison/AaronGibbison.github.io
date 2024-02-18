import type {
  Career as TCareer,
  Project as TProject,
} from "../../types/cv.d";
import { Component, Fragment, h } from "nano-jsx";

const dateFormat = new Intl.DateTimeFormat(undefined, {
  year: "numeric",
  month: "short",
});

export function Careers({ careers }: {
  careers: TCareer[];
}): Component {
  const careersHtml: Component[] = careers
    .sort((a, b) =>
      b.careerProgression[0].start.valueOf() -
      a.careerProgression[0].start.valueOf()
    )
    .map((c) => <Career career={c} />);

  return (
    <div class="careers">
      {careersHtml}
    </div>
  );
}

function Career({ career }: {
  career: TCareer;
}): Component {
  return (
    <div
      class="career"
      id={career.company}
    >
      <h2 class="company">{career.company}</h2>
      <p class="description">{career.description}</p>
      {career.careerProgression.map((cp, index) => (
        <div class="progression">
          <div class="heading">
            <p class="role">
              <strong>{cp.title}</strong>
            </p>
            <p class="date">
              <strong>
                {dateFormat.format(cp.start)}
                {cp.end
                  ? ` - ${dateFormat.format(cp.end)}`
                  : index === 0
                  ? " - Present"
                  : ""}
              </strong>
            </p>
          </div>
          <div class="projects">
            {cp.projects.map((p) => (
              <Project
                isSingleProject={cp.projects.length === 1}
                project={p}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Project({
  isSingleProject,
  project,
}: {
  isSingleProject: boolean;
  project: TProject;
}): Component {
  return (
    <div
      class="project"
      id={project.label}
    >
      {project.skills.length > 0
        ? (
          <div class="header">
            {isSingleProject ? "" : (
              <>
                <h3 class="title">Project:</h3>
                <h3>{project.label}</h3>
              </>
            )} <h4 class="tech">Technology:</h4>
            <h4>{project.skills.join(", ")}</h4>
          </div>
        )
        : null}
      <ul class="notables">
        {project.notables.map((n) => <li>{n}</li>)}
      </ul>
    </div>
  );
}
