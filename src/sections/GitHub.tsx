import SectionTitle from "@/components/SectionTitle";
import GitHubStats from "@/components/ui/GitHubStats";
import { github } from "@/data/github";
import { FaGithub } from "react-icons/fa6";

export default function GitHub() {
  return (
    <section
      className="bg-slate-100 py-24 dark:bg-slate-900"
      id="github"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          subtitle="Open Source"
          title="GitHub Portfolio"
        />

        {/* Profile Banner */}
        <div className="mb-10 flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-3xl text-slate-700 dark:text-white" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {github.username}
              </h3>
            </div>
            <p className="mt-3 max-w-xl text-slate-500 dark:text-slate-400">
              Building cloud infrastructure, DevOps platforms, Kubernetes
              environments, Infrastructure as Code, and cloud security projects.
              All projects follow production engineering best practices.
            </p>
          </div>
          <a         
            href={github.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <FaGithub />
            Visit GitHub →
          </a>
        </div>

        {/* Live GitHub Data */}
        <GitHubStats />
      </div>
    </section>
  );
}