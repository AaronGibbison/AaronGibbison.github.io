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

export type Personal = {
  name: string;
  email: string;
  mobile: string;
  linkedin: string;
  github: string;
};
