import { copyStatic, generatePage, savePage } from "../../to-html";
import { generateThoughtPages } from "./app";

generateThoughtPages().map(({ page, path }) =>
    savePage("thoughts", path, generatePage(page))
);
copyStatic("thoughts");
