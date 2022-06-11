import type { TPage } from "../../@types/thoughts.d.ts";
import { Component, h } from "../../deno.ts";
import { Page } from "../Components/Page.tsx";
import {
  footnoteIndexer,
  Footnotes,
  TFootnote,
} from "../Components/Footnote.tsx";

export function AGI(page: TPage): Component {
  const footnoteArray = Object.values(footnotes);
  const FootnoteIndex = footnoteIndexer(footnoteArray);

  return (
    <Page {...page}>
      <main>
        <h1>{page.title}</h1>
        <b>
          ### Incomplete. Needs proof reading, and look up recent AI
          developments - Below statements are likely incorrect
        </b>

        <div>
          <h2 for={"table-of-contents"}>Table of Contents</h2>
          <ul id={"table-of-contents"}>
            <li>
              <a href={"#abstract"}>Introduction</a>
            </li>
            <li>
              <a href={"#emergent-behaviour"}>Emergent Behaviour</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 id={"abstract"}>Introduction</h2>
          <p>
            They are multiple ways to create an 'Artificial
            Intelligence'<FootnoteIndex footnote={footnotes["weakAi"]} />,
            however the construction of an AI will determine the capabilities of
            such as system. Modern AI largely (but not exclusively) uses a
            mixture of large data sets and Deep Neural Networks to achieve a
            highly sophisticated AI with the assistance of Machine Learning
            technics. There has been developments of how DNNs in regards to ML
            methods and Neutral Net nodes. These are not the only methods, but
            have a substantial influence in the current state of AI, e.g. part
            of AlphaGo's learning was due to the use of adversarial networks.
          </p>
        </div>

        <div>
          <h2 id={"emergent-behaviour"}>Emergent Behaviour</h2>
          <p>
            Behaviour for a computer programme is often explicitly described.
            Emergent behaviour is the practice of writing a series of rules in
            which a appears. The advantage of emergent behaviour is that it can
            allow for complex systems with a simple set of constructs.
          </p>
          <p>
            A simple example of emergent behaviour is{" "}
            <a href={"https://en.wikipedia.org/wiki/Boids"}>Boids</a>, which
            imitates a flock of birds without being explicit. The same set of
            rules can be used to{" "}
            <a href={"https://www.youtube.com/watch?v=bqtqltqcQhw"}>
              simulate a fish colony
            </a>. A simple extension to the Boids' separation rule can allow
            them to scatter when a predator approaches, or avoid obstacles.
          </p>
          <p>
            Why use emergent behaviour for Artificial Intelligence? Instead of
            trying to conform an AI to a desired outcome (such as GPT3 or
            AlphaGo), Emergent behaviour will hopefully allow for a more complex
            AI to arise. The principals proposed here will allow for such an AI
            to:
            <ol>
              <li>Learn rapidly</li>
              <li>Solve complex problems</li>
              <li>Work with a low volume of data</li>
              <li>Evolve when encountering unknown problems</li>
            </ol>
          </p>
        </div>
        <div>
          <h2>Issues with Emergent Behaviour</h2>
          <p>
            Before going into the principals an Emergent AI should to be based
            upon, considerations for why it may not work, or the complexities
            involved in each subsections. By understanding these failure points,
            it will give a path to correct these issues, resulting in an AGI.
          </p>

          <h3>General Problems</h3>
          <p>
            Firstly, what will the Emergent AI looks like? The modal used is
            important, otherwise difficulties will appear in developing the
            rules which will allow for Emergent behaviour. Neural Networks could
            be a good idea since they are meant to be based on real life. An
            issue that could occur using NNs, modifying the dynamics may require
            relearning everything again, severely hampering the AIs ability to
            evolve.
          </p>

          <h3>Temporal</h3>
          <p></p>

          <h3>Abstraction</h3>
          <p></p>

          <h3>Acceptable Failure</h3>
          <p></p>

          <h3>Growth (Self Modification)</h3>
          <p>
            As mentioned in the general problem section, construction is
            important for relearning. Prevent uncontrolled growth is equally
            important, due to the unnecessary increase in resource consumption
            (energy and space). While it may not seem like a problem, it would
            cripple training as only some computers can even train such an AI,
            alongside all the additional parameters which increase training
            time, such as for a Neural Network by n<sup>2</sup>.
          </p>
        </div>

        <div>
          <h2>Temporal</h2>
          <div></div>
        </div>

        <div>
          <h2>Abstraction</h2>
          <div></div>
        </div>

        <div>
          <h2>Acceptable Failure</h2>
          <div></div>
        </div>

        <div>
          <h2>Growth (Self Modification)</h2>
          <div></div>
        </div>

        <div>
          <h2>Notes</h2>
          <Footnotes footnotes={footnoteArray} />
        </div>
      </main>
    </Page>
  );
}

const footnotes: { [key: string]: TFootnote } = {
  weakAi: {
    text:
      "Artificial intelligence in this situation refers to 'weak' AI. The ability to achieve human like behaviour" +
      " within a specific domain (e.g. chess).",
  },
};
