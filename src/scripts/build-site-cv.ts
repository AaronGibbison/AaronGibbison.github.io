import { generateCv } from "../cv/generate-cv.ts";
import { buildHtmlFile } from "./template-html.ts";

const html = buildHtmlFile(generateCv());
Promise.all([
  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html)),
  Deno.copyFile("./src/cv/cv.css", "./site/cv/cv.css"),
]);
