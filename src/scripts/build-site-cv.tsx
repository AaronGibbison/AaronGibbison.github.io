import { generateCv } from "../cv/generate-cv.tsx";
import { buildHtmlFile } from "./template-html.tsx";

const html = buildHtmlFile(generateCv());
Promise.all([
  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html)),
  Deno.copyFile("./src/cv/cv.css", "./site/cv/cv.css"),
]);
