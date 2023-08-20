import { generateThoughtPages } from "../subSites/thoughts/pages.tsx";
import { copyStatic, generatePage, savePage } from "./to-html.ts";

Promise.all(
  generateThoughtPages()
    .map(({
      page,
      ...props
    }) => ({ page: generatePage(page), ...props }))
    .map(({ page, path }) => savePage(`thoughts/${path}`, page)),
)
  .then(() => copyStatic("thoughts"));
