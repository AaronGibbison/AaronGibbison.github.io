import type { Component } from "nano-jsx";

export type TPage = Readonly<{
    title: string;
    Navigation: Component;
}>;

export type TNavigation = Readonly<{
    path: string;
    title: string;
}>;
