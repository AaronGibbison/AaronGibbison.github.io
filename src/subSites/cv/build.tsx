import { h } from "nano-jsx";
import { CV } from "./CV";
import { ovo } from "./details/career-ovo";
import { softwire } from "./details/career-softwire";
import { personal } from "./details/personal";
import { personalProjects } from "./details/projects";
import { copyStatic, generatePage, savePage } from "../../to-html.ts";

const Site = (
    <CV
        title="CV - Aaron Gibbison"
        personal={personal}
        careers={[ovo, softwire]}
        projects={personalProjects}
    />
);

savePage("cv", "index", generatePage(Site));
copyStatic("cv");
