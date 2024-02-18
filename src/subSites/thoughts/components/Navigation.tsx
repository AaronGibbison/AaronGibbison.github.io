import { TNavigation } from "../../../types/thoughts";
import { Component, h } from "nano-jsx";

export function Navigation({ pages }: { pages: TNavigation[] }): Component {
    return (
        <nav>
            {pages.map((page) => (
                <a class={"nav-link"} href={`${page.path}.html`}>
                    {page.title}
                </a>
            ))}
        </nav>
    );
}
