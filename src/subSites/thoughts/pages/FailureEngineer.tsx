import { Component, Fragment, h } from "nano-jsx";

export function FailureEngineer(): Component {
  return (
    <>
      <p>Created: 2022-07-25</p>
      <p>Updated: 2022-08-05</p>

      <h2>Miss Management 2 - June 2022</h2>
      <p>
        Tl;dr self Improvement: Better information gathering. Communicate more.
        Better plan time.
      </p>

      <p>
        Deciding on the architecture took an extensive amount of time - if a
        meeting with UX was had instead, their requirements could have been
        obtained earlier in the process. This would mean, when analysing
        different technologies / systems, we could pick one which would better
        fit all the criteria. A delay of at least 2 weeks was caused by this -
        enough to setup the testing framework to provide confidence that was
        severely lacking.
      </p>

      <p>
        Gathering requirements from external stakeholder did not go well. In
        part, it was an internal problem - however, a greater level of
        scrutinization should have occurred. By getting out a thoroughly
        detailed requirement would have reduced the initial bug rate. When
        slowly finding out requirements of the project, I did not share it well
        with the other engineers.
      </p>

      <p>
        Lastly, there were several times that my time may have been spent
        better. A week was spent creating detailed tests for validation - this
        could have been left to QA to gather examples that should been tested.
        Then a set up which can easily use new / different data would have made
        it easy for QA to add data to check. Similarly, I did not need to do
        work setting up the infrastructure, and asked production engineering to
        do the work. Downside of taking such a path is the lack of learning -
        not understanding Terraform or the architecture itself.
      </p>

      <h2>Poor Training - H2 2021</h2>
      <p>
        Tl;dr self Improvement: Better understand how Junior works, and use
        their preferred method.
      </p>

      <p>
        <b>
          Note: Maybe too hard on self, with too high of expectations on the
          Junior?
        </b>
      </p>

      <p>
        Having a Junior Developer on the team, it was my duty to train the
        Junior into becoming a mid level engineer. Giving my subpar
        communication skills, lack of ability in mentorship and desire to do
        complex tasks. Development of the Junior developer did not go so well.
        By a year in, they are not fully independent, still requiring assistance
        in tasks I would think of as easily doable by a mid level engineer.
      </p>

      <p>
        When mentoring in the future, I should better understand how the
        personal thinks. By understanding their thought process when dealing
        with problems, I can better mentor them by providing advice or tasks
        that suit their methodology. While gruelling, maybe it is better to let
        Juniors deal with debugging alone? The ability to debug independently is
        extensively useful, and enables a better understand of how systems work.
      </p>

      <h2>Miss Management - June 2019</h2>
      <p>
        Tl;dr self Improvement: Ensure in the early stage of work, that the
        correct approach is taken.
      </p>

      <p>
        In my second official project (C# .Net), I got the privilege to
        coordinate a major sub project for the client. A senior developer, to
        whom I sat next to, was my mentor / adviser to the project. The sub
        project lasted 3 months, with each month being a separate stage of the
        sub project. The team for the complete project, at its largest, was 11
        personal. However, the subproject had 3 or 4 personal at any one time.
        The project had a monthly, release cycle.
      </p>

      <p>
        The first two months went fine. I believe there were minor issue running
        up to the deadline, but everything was released on time, and in working
        order. On the last month of sub project, allocating tasks to team
        members. I allocated an important page to a given team member - to which
        this page was vital. Work allocation in itself should not be an issue -
        since in theory, senior members should be able to complete their
        workload/ Then they can assist other members, bringing the project up to
        speed (maybe a couple days behind).
      </p>

      <p>
        To my vague memory, there were significant issues with the page. This
        could have been easily resolved by checking in early to see how it was
        going, allowing for rapid amendments, impacting completion time.
        Instead, the work had to largely be redone delaying not only the page,
        but the entire project by a week. This resulted in missing our standard
        release cycle, causing immense displeasure. I believe this caused strain
        within the business relationship, and reworked the business agreement.
      </p>

      <p>
        Another issue I noticed, was a potential performance hit. Given a
        sufficiently large dataset, the page load time would be noticeably
        significant. Instead of fixing it when known, it was instead delayed
        until after the release, in which the client complained. While not
        awful, it demonstrated a lack of care about the system. Negative 1
        point.
      </p>

      <h2>Overly Enthusiastic - December 2018</h2>
      <p>
        Tl;dr self Improvement: Be more focused on what work is being done. Do
        one task, and do it well.
      </p>

      <p>
        Was my first official project (JS / TS) at Softwire - to develop an API
        interface. I was not on holiday over christmas while the other 2 members
        of the team were. One of the members moved projects in early January,
        leaving me and another personal there after.
      </p>

      <p>
        Given I was alone for ~1.5 weeks over Christmas to do the work - I
        vaguely implemented a breadth of the apis. My code quality was poor at
        the time, and none of the tasks were 100% completed. This meant the my
        colleague had to deal with my shoddy code, while finishing implementing
        the APIs. I eventually bounced back and fourth between two API, until
        their implementations was complete.
      </p>

      <p>
        For me at the time, this felt fine. However, it was terrible for the
        colleague I worked with, and likely extended the length of the project.
        The code quality was okay - most because of my colleague cleaning up
        after me along the way. I do wonder if the client (who were technical)
        had salt in their mouth as they would have an expectation of what the
        quality should be like - at least future projects made clients happy
        (but not the next one).
      </p>

      <p>
        It wasn't all bad. There were edge cases that I noticed in regards to
        race conditions, and have extensive discussions in order to resolve.
        Also added logs in areas where I believed was a high likelihood of
        failure. This came in useful when testing of the APIs failed, and was
        able to implement a fix within ~20 minutes, due to logs being available.
      </p>
    </>
  );
}
