"use client";

import { TechnologyIcon } from "./TechnologyIcon";

const technologies = [
  "AWS",
  "Terraform",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Linux",
  "Python",
  "DevSecOps",
];

export default function TechStack() {
  return (
    <div className="mt-10">
      <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-400">
        Core Technologies
      </p>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
          >
            <TechnologyIcon name={tech} />
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}