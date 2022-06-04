import { renderSSR } from "../deno.ts";

import { pages } from "../thoughts/pages/pages.tsx";

const textEncoder = new TextEncoder();

Promise.all([
  Deno.copyFile("./src/thoughts/main.css", "./site/thoughts/main.css"),
  ...pages
    .map(({page, ...props}) => ({ page: renderSSR(page), ...props }) )
    .map(({page, path}) => Deno.writeFile(`./site/thoughts/${path}.html`, textEncoder.encode(page) ))
]);
