import * as fs from "fs";
import { Component, Helmet, renderSSR } from "nano-jsx";

export function copyStatic(root: string) {
    const staticPath = `${root}/static`;

    fs.mkdirSync(`./site/${staticPath}`, { recursive: true });
    const files = fs.readdirSync(`./src/subSites/${staticPath}`, {
        recursive: true,
    });

    for (const dirEntry of files) {
        fs.copyFileSync(
            `./src/subSites/${staticPath}/${dirEntry}`,
            `./site/${staticPath}/${dirEntry}`,
        );
    }
}

export function generatePage(page: Component) {
    const { body, head, footer, attributes } = Helmet.SSR(renderSSR(page));

    return `<!DOCTYPE html>
<html ${attributes.html.toString()}>
  <head>
    ${head.join("\n")}
  </head>
  <body ${attributes.body.toString()}>
    ${body}
    ${footer.join("\n")}
  </body>
</html>
`;
}

export function savePage(path: string, file: string, page: string) {
    fs.mkdirSync(`./site/${path}`, { recursive: true });
    return fs.writeFileSync(`./site/${path}/${file}.html`, page);
}
