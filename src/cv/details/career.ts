export type Career = {
  company: string;
  title: string;
  description: string;
  start: Date;
  end?: Date;
  projects: {
    priority: number;
    label: string;
    skills: string[];
    notables: string[];
  }[];
};

export const softwire: Career = {
  company: "Softwire",
  title: "Software Developer",
  description:
    "Softwire is a digital agency and consultancy that delivers software projects for a range of clients, both public " +
    "and private sector. Delivering robust systems, coordinating with the client to ensure the application meets their " +
    "needs adding value.",
  start: new Date("2018-09-01"),
  end: new Date("2020-10-01"),
  projects: [
    {
      label: "BBC (Support)",
      priority: 1,
      skills: [
        "Java",
        "Scala",
        "Javascript",
        "React",
        "Redux",
        "Python",
        "SQL",
        "AWS",
      ],
      notables: [
        "Highly satisfied cliental increasing account value by 33%",
        "80% (~£4 Million) cost reduction for BBC Monitoring team by designing and developing video transcription " +
        "scheduling",
        "Worked across domain boundaries with the UX department gaining insight while sharing knowledge to improve " +
        "interoperability",
      ],
    },
    {
      label: "BBC (Security)",
      priority: 2,
      skills: [
        "Node.JS",
        "Javascript",
        "Typescript",
        "Gremlin",
        "GraphQL",
        "AWS",
        "Docker",
      ],
      notables: [
        "Team expert in Gremlin reviewing PRs to prevent security vulnerabilities and technical failures",
        "Setup Docker containers reducing overhead in setting up developer environment and running e2e tests",
        "Detected 80% of bugs by building AWS infrastructure with CI automated testing",
        "Increased application performance by 5x while reducing memory usage by 10%",
      ],
    },
    {
      label: "Air Charter Service (ACS)",
      priority: 3,
      skills: ["C# (.NET)", "SQL", "Javascript", "JQuery"],
      notables: [
        "Led improvement for handling legal information, reducing risk while simplifying reuse",
        "Designed SQL migration schema of a globally distributed database",
      ],
    },
  ],
};

export const ovo: Career = {
  company: "OVO",
  title: "Software Engineer",
  description:
    "OVO is an Energy Retailer providing electricity and gas to households, focusing on green energy and " +
    "the climate.",
  start: new Date("2020-11-01"),
  projects: [{
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
  }],
};
