import { h, Helmet, renderSSR } from "nano-jsx";
import { CV } from "../cv/CV.tsx";

import { personal } from "../cv/details/personal.ts";
import { softwire } from "../cv/details/career-softwire.ts";
import { ovo } from "../cv/details/career-ovo.ts";
import { personalProjects } from "../cv/details/projects.ts";
import { generatePage, savePage } from "./to-html.ts";

savePage("cv/index", generatePage(<CV
  title="CV - Aaron Gibbison"
  personal={personal}
  careers={[ ovo, softwire ]}
  projects={personalProjects}
/>));
