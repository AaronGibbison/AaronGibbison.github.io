import { CvPage } from "../subSites/cv/CV.tsx";
import { generatePage, savePage } from "./to-html.ts";

savePage("cv/index", generatePage(CvPage));
