import { Fragment, h } from "nano-jsx";

export function ForEffectiveEngineering() {
  return (
    <>
      <p style={{ color: "gray" }}>
        Complexity is your enemy. Any fool can make something complicated. It is
        hard to keep things simple. - Richard Branson
      </p>
      <br />

      <h2>
        Introduction
      </h2>
      <p>
        Engineers need to modify existing systems frequently. If a system can be
        modified with ease, then improvements can be made rapids, while also
        given Engineers the freedom to pursue other goals. Maintainability
        becomes the primary focus of the majority of Engineers to achieve this
        goal, often to the detriment of other "non-function" (technical)
        requirements.
      </p>
      <p>
        However, maintainability is rarely quantitatively determined, instead
        qualitatively determined. If Engineers can quantitatively define
        maintainability, then decisions can be made to empirically improve
        maintainability. Often, a metric used is how long is takes new features
        to be developed. But this metric is problematic since it cannot be
        compared to the previous implementation, while taking months to get
        significant data.
      </p>

      <h2>
        Quantifying Maintainability
      </h2>
      <p>
        Ensuring reliability in quantifying main maintainability will
      </p>

      <h2>
        Simplicity
      </h2>
      <p>
        Software simplicity should be the primary focus of software design. The
        importance of simplicity cannot be understated, achieving non-functional
        (technical) benefits with far less effort. E.g. A simpler system is
        easier to understand, and thus modify, implementing new features. There
        are fewer scenarios which makes testing easier, plus the reduced surface
        area makes defects less likely. Building simple systems
      </p>
      <p>
        To design a simple engineering infrastructure, there are multiple layer
        to consider: code, application, domain, business. All stages needs to be
        considered creating the overall business architecture, even if not
        formally expressed every time. Business and domain are frequently
        decided before the work has started, brown-field work will follow
        conventions of the existing application, leaving the code for most
        Engineers. Senior Engineers may venture into deciding the architecture
        at the application, but only the most Senior Engineers (often Principal
        / Staff) or Engineering Management will make domain level decision.
      </p>
    </>
  );
}
