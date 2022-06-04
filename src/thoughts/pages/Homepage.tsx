import type { TPage } from "../../@types/thoughts.d.ts";
import { h, Component } from "../../deno.ts";
import { Page } from "../Page.tsx";

export function Homepage(page: TPage): Component {
  return <Page {...page}>
    <p>Hello World!</p>
  </Page>
}
