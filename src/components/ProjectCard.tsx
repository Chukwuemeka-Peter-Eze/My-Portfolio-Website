type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
};

export default function ProjectCard({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-300 hover:-translate-y-2 hover:border-cyan-400">

      <img
        src={project.image}
        alt={project.title}
        className="h-56 w-full object-cover"
      />

      <div className="p-8">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        <a
          href={project.github}
          className="mt-8 inline-block rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          View Project →
        </a>

      </div>

    </div>
  );
}