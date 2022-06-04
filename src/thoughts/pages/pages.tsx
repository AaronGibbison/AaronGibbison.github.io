import { h, Component } from '../../deno.ts';
import { Homepage } from "./Homepage.tsx";
import { Ideas } from "./Ideas.tsx";

const title = (t: string) => `${t} - Aaron Gibbison`;

export const pages: { page: Component, path: string; }[] = [
  { page: <Homepage title={title("Homepage")} />, path: "index" },
  { page: <Ideas title={title("Ideas")} />, path: "ideas" }
];
