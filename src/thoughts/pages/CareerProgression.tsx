import type { TPage } from '../../@types/thoughts.d.ts';
import { Component, Fragment, h } from 'nano-jsx';
import { Page } from '../components/Page.tsx';

export function CareerProgression(page: TPage): Component {
  return (
    <Page {...page}>
      <main>
        <h1>{page.title}</h1>
      </main>
    </Page>
  );
}
