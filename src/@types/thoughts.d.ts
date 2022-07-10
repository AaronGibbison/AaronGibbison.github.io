import type { Component } from "nano-jsx";

export type TPage = {
  title: string;
  Navigation: Component;
};

export type TNavigation = {
  path: string;
  title: string;
};
