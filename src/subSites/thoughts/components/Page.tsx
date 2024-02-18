import type { TPage as TPage } from "../../../types/thoughts";
import { Component, Fragment, h, Helmet } from "nano-jsx";
import { Navigation } from "./Navigation";

export function Page({ title, children, Navigation }: TPage & {
    children: Component | Component[];
}) {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title} - Aaron Gibbison</title>
                <link href="static/css.css" rel="stylesheet" />
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
