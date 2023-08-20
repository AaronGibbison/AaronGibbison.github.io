import type { TPage as TPage } from "../../../types/thoughts.d.ts";
import { Component, Fragment, h, Helmet } from "nano-jsx";

export function Page({ title, children, Navigation }: TPage & {
  children: Component;
}) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title} - Aaron Gibbison</title>
        <link rel="stylesheet" href="./static/thoughts.css" />
      </Helmet>
      <div id="page">
        <main>
          <h1>{title}</h1>
          {children}
        </main>
        {Navigation}
      </div>
    </>
  );
}