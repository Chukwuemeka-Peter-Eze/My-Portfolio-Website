type Project = {
  title: string;
  description: string;
  image: string;

  technologies: string[];

  github: string;

  demo?: string;

  architecture?: string;

  highlights?: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 hover:scale-105"
        />
        {project.architecture && (
          <a
            href={project.architecture}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-3 top-3 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:bg-cyan-500"
          >
            🔍 View Architecture
          </a>
        )}
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>

        {project.highlights && (
        <div className="mt-5">
        <ul className="space-y-2">
          {project.highlights.map((item) => (
          <li
            key={item}
            className="text-sm text-slate-600 dark:text-slate-300"
          >
            ✅ {item}
          </li>
          ))}
        </ul>
        </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a         
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View on GitHub →
          </a>

          {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-cyan-500 px-5 py-3 font-semibold text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Live Demo
          </a>
        )}
        </div>
      </div>
    </div>
  );
}