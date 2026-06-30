import Image from "next/image";
import { ExternalLink, Workflow } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

export type Project = {
  title: string;
  description: string;
  image: string;

  technologies: string[];

  github: string;

  demo?: string;

  architecture?: string;

  highlights: string[];

  metrics?: string[];

  category?: string;

  difficulty?: "Intermediate" | "Advanced" | "Enterprise";

  featured?: boolean;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

      {/* Project Image */}
      <div className="relative overflow-hidden">

        {/* Featured + Category Badges */}
        <div className="absolute left-4 top-4 z-20 flex flex-wrap gap-2">

          {project.featured && (
            <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
              Featured
            </span>
          )}

          <span className="rounded-full border border-white/40 bg-black/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            {project.category ?? "Cloud Engineering"}
          </span>

          <span className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
            {project.difficulty ?? "Advanced"}
          </span>

        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {project.architecture && (
          <a
            href={project.architecture}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-xl bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-cyan-500"
          >
            <Workflow size={16} />
            Architecture
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-8">

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Engineering Highlights */}
        <div className="mt-6">

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-500">
            Engineering Highlights
          </h4>

          <ul className="space-y-3">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >
                <span className="mt-1 text-cyan-500">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>

        {/* Project Impact */}
        {project.metrics && (
          <div className="mt-6">

            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-500">
              Project Impact
            </h4>

            <div className="flex flex-wrap gap-2">

              {project.metrics.map((metric) => (
                <span
                  key={metric}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-600 dark:text-cyan-300"
                >
                  {metric}
                </span>
              ))}

            </div>

          </div>
        )}

        {/* Technologies */}
        <div className="mt-8">

          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-500">
            Technologies
          </h4>

          <div className="flex flex-wrap gap-2">

            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-sm text-slate-700 transition group-hover:border-cyan-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <FaGithub className="text-lg" />
            GitHub Repository
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}

        </div>

      </div>

    </article>
  );
}