import { Personal, personal } from "./personal.ts";
import { Career, ovo, softwire } from "./career.ts";
import type { GeneratedPage } from "../generatedPage.d.ts";

function personalToHtml(personal: Personal) {
  return `<div id="personal">
  <h1>Name: ${personal.name}</h1>
  <h2>Email: ${personal.email}</h2>
  <h2>Mobile: ${personal.mobile}</h2>
  <h2>Education: Self-taught</h2>
</div>`;
}

function careerToHtml(career: Career) {
  const dateFormat = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
  });

  const projects = career.projects.map((project) =>
    `<div class="project" id="${project.label}">
      <div class="header">
        ${
      career.projects.length > 1
        ? (`<h3 class="title">Project:</h3>
        <h3>${project.label}</h3>`)
        : ""
    }    
        <h4 class="tech">Technology:</h4>
        <h4>${project.skills.join(", ")}</h4>
      </div>
      <ul>
        ${project.notables.map((n) => `<li>${n}</li>`).join("\n")}
      </ul>
    </div>`
  );

  return `<div class="career" id="${career.company}">
  <div class="heading">
    <h2 class="company">${career.company}</h2>
    <p class="role">${career.title}</p>
    <p class="date">${dateFormat.format(career.start)} - ${career.end ?
    dateFormat.format(career.end) : "Present"
  }</p>
  </div>
  <p class="description">${career.description}</p>
  <div class="projects">
    ${projects.join("\n")}
  </div>
</div>`;
}

export function generateCv(): GeneratedPage {
  const personalHtml = personalToHtml(personal);
  const careersHtml: string = [ovo, softwire]
    .sort((a, b) => b.start.valueOf() - a.start.valueOf())
    .map(careerToHtml)
    .join("\n");

  return {
    title: "CV - Aaron Gibbison",
    headers: ['<link rel="stylesheet" href="cv.css"/>'],
    body: [
      '<div id="cv">',
      personalHtml,
      '<div class="careers">',
      careersHtml,
      "</div>",
      "</div>",
    ],
  };
}
