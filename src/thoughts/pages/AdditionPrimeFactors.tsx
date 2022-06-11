import type { TPage } from "../../@types/thoughts.d.ts";

import { Component, Fragment, h } from "../../deno.ts";
import { Page } from "../Components/Page.tsx";

export function AdditionPrimeFactors(page: TPage): Component {
  return (
    <Page {...page}>
      <main>
        <h1>{page.title}</h1>
      </main>
    </Page>
  );
}
