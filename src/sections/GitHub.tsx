import SectionTitle from "@/components/SectionTitle";
import GitHubCard from "@/components/GitHubCard";
import { github } from "@/data/github";

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
        <div className="mb-10 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
          <h3 className="text-3xl font-bold">{github.username}</h3>
          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Building cloud infrastructure, DevOps platforms, Kubernetes
            environments, Infrastructure as Code, and cloud security projects.
          </p>
          <a         
            href={github.profile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Visit GitHub →
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {github.featured.map((repository) => (
            <GitHubCard key={repository.name} repository={repository} />
          ))}
        </div>
      </div>
    </section>
  );
}