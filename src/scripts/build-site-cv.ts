import { CvPage } from "../subSites/cv/CV.tsx";
import { copyStatic, generatePage, savePage } from "./to-html.ts";

savePage("cv/index", generatePage(CvPage))
  .then(() => copyStatic("cv"));
