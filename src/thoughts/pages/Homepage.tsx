import type { TPage } from "../../@types/thoughts.d.ts";
import { Component, h } from "../../deno.ts";
import { Page } from "../Components/Page.tsx";

export function Homepage(page: TPage): Component {
  return (
    <Page {...page}>
      <main>
        <h1>Hello World!</h1>
      </main>
    </Page>
  );
}
