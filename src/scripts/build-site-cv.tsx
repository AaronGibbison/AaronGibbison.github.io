import { h, renderSSR } from "../deno.ts";
import { CV } from "../cv/CV.tsx";

import { personal } from "../cv/details/personal.ts";
import { softwire } from "../cv/details/career-softwire.ts";
import { ovo  } from "../cv/details/career-ovo.ts";

const html = renderSSR(
  <CV
    title="CV - Aaron Gibbison"
    personal={personal}
    careers={[ovo, softwire]}
  />
);

console.log(html);

Promise.all([
  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html)),
  Deno.copyFile("./src/cv/cv.css", "./site/cv/cv.css"),
]);
