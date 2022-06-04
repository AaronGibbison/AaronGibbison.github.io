import { h, renderSSR } from "../deno.ts";
import { GeneratedPage } from "../@types/generatedPage.d.ts";

type Page = {
  generatedPage: GeneratedPage;
}

function App ({ generatedPage: {body, title, headers} }: Page) {
  return (
    <html lang="en-GB">
      <head>
        <meta charSet={"utf-8"} />
        <title>{title}</title>
        {headers}
      </head>
      <body>
        {body}
      </body>
    </html>
  );
}

export function buildHtmlFile(generatedPage: GeneratedPage) {
  const app = renderSSR(<App generatedPage={generatedPage} />);
  console.log(
    app
  );

  return app
}
