import type { Personal } from "../../types/cv.d.ts";
import { Component, h } from "nano-jsx";

export function Personal({ personal }: { personal: Personal }): Component {
  return (
    <div id="personal">
      <h1 id="name">Name: {personal.name}</h1>
      <h2 id="email">Email: {personal.email}</h2>
      <h2 id="mobile">Mobile: {personal.mobile}</h2>
      <h2 id="education">Education: Self-taught</h2>
    </div>
  );
}
