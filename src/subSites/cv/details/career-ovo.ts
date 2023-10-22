import { Career } from "../../../types/cv.d.ts";

export const ovo: Career = {
  company: "OVO",
  description:
    "OVO is an Energy Retailer providing electricity and gas to households, focusing on green energy and " +
    "the climate.",
  careerProgression: [
    {
      title: "Software Engineer",
      start: new Date("2020-11-01"),
      projects: [
        {
          label: "Retention",
          priority: 1,
          skills: ["Typescript", "React", "React-Native", "Node.JS", "AWS"],
          notables: [
            "Improved engineering framework while also mentoring personal on both a technical and interpersonal level",
            "Called upon to help resolve incidents outside my normal domain, permitting release of major features",
            "Assisted other teams in better understanding their domain and designing their architecture",
            "Analysed, designed and led feature development which improved contract renewal by 33%",
            "Reduced build & testing time by 50%, while preventing test freezes due to excessive memory usage on shared codebases",
          ],
        },
      ],
    },
  ],
};
