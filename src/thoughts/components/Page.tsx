import type { TPage as TPage } from '../../@types/thoughts.d.ts';
import { Component, Fragment, h, Helmet } from 'nano-jsx';

export function Page(
  { title, children, Navigation }: TPage & { children: Component },
) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8"/>
        <title>{title} - Aaron Gibbison</title>
        <link rel="stylesheet" href="./static/css.css"/>
      </Helmet>
      {children}
      {Navigation}
    </>
  );
}
