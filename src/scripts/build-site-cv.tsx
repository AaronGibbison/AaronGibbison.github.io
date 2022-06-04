import { h, renderSSR } from "../deno.ts";
import { Cv } from "../cv/generate-cv.tsx";

const html = renderSSR(
  <html lang="en-GB">
    <Cv />
  </html>
);

console.log(html);

Promise.all([
  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html)),
  Deno.copyFile("./src/cv/cv.css", "./site/cv/cv.css"),
]);
