import { GeneratedPage } from "../generatedPage.d.ts";

function htmlHead(title: string, headers: string[]) {
  return [
    "<head>",
    '<meta charset = "utf-8">',
    `<title>${title}</title>`,
    headers.join("\n"),
    "</head>",
  ].join("\n");
}

function htmlBody(content: string[]) {
  return ["<body>", content.join("\n"), "</body>"].join("\n");
}

export function buildHtmlFile({ title, headers, body }: GeneratedPage) {
  return [
    "<!doctype html>",
    '<html lang="en-GB">',
    htmlHead(title, headers),
    htmlBody(body),
    "</html>",
  ].join("\n");
}
