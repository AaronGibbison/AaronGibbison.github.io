export function savePage(
  { body, head, footer, attributes }:
    { body: string, head: string[], footer: string[], attributes: { html: Map<string, string>, body: Map<string, string> } },
) {
  const html = `<!DOCTYPE html>
<html ${ attributes.html.toString() }>
  <head>
    ${ head.join("\n") }
  </head>
  <body ${ attributes.body.toString() }>
    ${ body }
    ${ footer.join("\n") }
  </body>
</html>
`;

  Deno.writeFile("./site/cv/index.html", new TextEncoder().encode(html));
}
