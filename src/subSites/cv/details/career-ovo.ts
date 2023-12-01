import { Career } from "../../../types/cv.d.ts";

export const ovo: Career = {
  company: "OVO",
  description:
    "OVO is an Energy Retailer providing electricity and gas to households, focusing on green energy and " +
    "the climate.",
  careerProgression: [
    {
      title: "Team Lead",
      start: new Date("2023-01-01"),
      projects: [
        {
          label: "Energy",
          priority: 1,
          skills: [
            "Typescript (Node.JS)",
            "AWS",
            "Terraform",
            "Github Actions",
            "SQL"
          ],
          notables: [
            "Mentoring engineers on both a technical and interpersonal level, leading them through promotions",
            "Leading a team of 10 cross-discipline personal touching every part of a data's lifecycle",
            "Plan the team's direction, strategy, and outcomes with PM and SEM to improve Customer Experience and Engineering capabilities",
            "Council with Engineers + SEMs on domain focus / coordination, setting the agenda, with a personal focus of culture over of tech improvements",
            "Build tools for the Engineering department, such as a mock generator using the builder pattern and Dockerised test database, allowing for ease of testing across across 100s of data variations"
          ],
        },
      ],
    },
    {
      title: "Software Engineer",
      start: new Date("2020-11-01"),
      end: new Date("2022-12-31"),
      projects: [
        {
          label: "Retention",
          priority: 2,
          skills: [],
          notables: [
            "Assisted in the development of the Energy API for use by multiple energy retailers, preferring designs for client usage then server",
            "Aiding other teams in better understanding their domain and designing their architecture",
            "Analysed, designed, and led feature development which improved contract renewal by 33%, devising of a double control approach to improve feature experiment reliability",
            "Reduced build & testing time by 50%, while preventing test freezes due to excessive memory usage on shared codebases",
            // "Called upon to help resolve incidents, including outside my domain for major feature release",
          ],
        },
      ],
    },
  ],
}
