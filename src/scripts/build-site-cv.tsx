import { h, renderSSR } from "nano-jsx";
import { CV } from "../cv/CV.tsx";

import { personal } from "../cv/details/personal.ts";
import { softwire } from "../cv/details/career-softwire.ts";
import { ovo } from "../cv/details/career-ovo.ts";
import { personalProjects } from "../cv/details/projects.ts";

const html = renderSSR(
  <CV
    title="CV - Aaron Gibbison"
    personal={personal}
    careers={[ovo, softwire]}
    projects={personalProjects}
  />
);

Promise.all([
  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html)),
  Deno.copyFile("./src/cv/cv.css", "./site/cv/cv.css"),
]);
