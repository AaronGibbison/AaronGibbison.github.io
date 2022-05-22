export type Career = {
  company: string;
  title: string;
  description?: string;
  start: Date;
  end?: Date;
  projects: {
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
    "needs adding positive business value.",
  start: new Date("2018-09-01"),
  end: new Date("2020-10-01"),
  projects: [
    {
      label: "BBC (Support)",
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
        "Highly satisfied client increasing account value by 33%",
        "80% cost reduction for BBC Monitoring team by designing and developing video transcription scheduling",
        "Worked cross domain boundaries with the UX department to gain insight while sharing knowledge to improve " +
        "interoperability"
      ],
    },
    {
      label: "BBC (Security)",
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
        "Became team expert in Gremlin reviewing side to prevent security vulnerabilities and technical failures",
        "Setup Docker containers reducing overhead in setting up developer environment and running e2e tests",
        "Detected 80% of bugs by building AWS infrastructure with CI automated testing",
        "Increased application performance by 5x while reducing memory usage by 10%"
      ],
    },
    {
      label: "Air Charter Service (ACS)",
      skills: ["C# (.NET)", "SQL", "Javascript", "JQuery"],
      notables: [
        "Development time reduced by 20% by auto generating HTML page with C#",
        "Designed SQL migration schema of a globally distributed database as part of a large architecture change to " +
        "the codebase"
      ],
    },
  ],
};

export const ovo: Career = {
  company: "OVO",
  title: "Software Engineer",
  description: "OVO is an Energy Retailer providing electricity and gas to households, focusing on green energy and " +
    "the climate.",
  start: new Date("2020-11-01"),
  projects: [{
    label: "Retention",
    skills: ["Typescript", "React", "React-Native", "AWS"],
    notables: [
      "Assisted Data Scientists in data analysis, improving contract renewal by 33%",
      "Designing new feature set and providing feedback on system design to other teams",
      "Reduced build and testing time by 50% while preventing tests from freezing due to excessive memory usage",
    ],
  }],
};
