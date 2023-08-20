import { Component, Helmet, renderSSR } from "nano-jsx";

export async function copyStatic(root: string) {
  const staticPath = `${root}/static`;

  await Deno.mkdir(`./site/${staticPath}`, { recursive: true });

  for await (const dirEntry of Deno.readDir(`./src/${staticPath}`)) {
    await Deno.copyFile(
      `./src/${staticPath}/${dirEntry.name}`,
      `./site/${staticPath}/${dirEntry.name}`,
    );
  }
}

export function generatePage(page: Component) {
  const { body, head, footer, attributes } = Helmet.SSR(
    renderSSR(page),
  );

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

export function savePage(path: string, page: string) {
  return Deno.writeFile(`./site/${path}.html`, new TextEncoder().encode(page));
}
