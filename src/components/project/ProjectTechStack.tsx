type ProjectTechStackProps = {
  technologies: string[];
};

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {
  return (
    <div className="mt-8">
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-500">
        Technology Stack
      </h4>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-cyan-500 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}