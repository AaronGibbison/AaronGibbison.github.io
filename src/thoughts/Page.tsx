import type {TPage as TPage} from "../@types/thoughts.d.ts";
import {Component, Fragment, h} from "../deno.ts";

export function Page({ title, children }: TPage & { children: Component }) {
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="main.css"/>
      </head>
      <body>
        {children}
      </body>
    </>
  );
}
