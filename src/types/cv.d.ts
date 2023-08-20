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

export type Career = {
  company: string;
  title: string;
  description: string;
  start: Date;
  end?: Date;
  projects: Project[];
};

export type Personal = {
  name: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
};
