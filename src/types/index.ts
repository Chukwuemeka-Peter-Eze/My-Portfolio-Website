export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

export type Blog = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  link: string;
};

export type Certification = {
  title: string;
  provider: string;
  status: string;
  expected: string;
  description: string;
};

export type CertificationJourneyItem = {
  id: number;
  title: string;
  provider: string;
  status: string;
  progress: number;
  expected: string;
  logo: string;
  badge: string;
  credential: string;
  github: string[];
  blog: string[];
  skills: string[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
};

export type Stat = {
  value: string;
  label: string;
};

export type NavItem = {
  name: string;
  href: string;
};