export type PProject = {
  title: string;
  description: string;
};

export type Project = {
  priority: number;
  label: string;
  skills: string[];
  notables: string[];
};

type CareerProgression = {
  title: string;
  start: Date;
  end?: Date;
  projects: Project[];
};

export type Career = {
  company: string;
  description: string;
  careerProgression: [CareerProgression, ...CareerProgression[]];
};

export type Personal = {
  name: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
};
