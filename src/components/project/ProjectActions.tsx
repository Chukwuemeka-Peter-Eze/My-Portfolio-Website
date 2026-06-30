import { FaGithub } from "react-icons/fa6";
import { ExternalLink, Workflow } from "lucide-react";

type ProjectActionsProps = {
  github: string;
  demo?: string;
  architecture?: string;
};

export default function ProjectActions({
  github,
  demo,
  architecture,
}: ProjectActionsProps) {
  return (
    <div className="mt-10 flex flex-wrap gap-3">
      {/* GitHub */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
      >
        <FaGithub className="text-lg" />
        GitHub
      </a>

      {/* Live Demo */}
      {demo && (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-cyan-500 px-5 py-3 font-semibold text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
        >
          <ExternalLink size={18} />
          Live Demo
        </a>
      )}

      {/* Architecture */}
      {architecture && (
        <a
          href={architecture}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-300"
        >
          <Workflow size={18} />
          Architecture
        </a>
      )}
    </div>
  );
}