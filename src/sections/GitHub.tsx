import SectionTitle from "@/components/SectionTitle";
import GitHubStats from "@/components/ui/GitHubStats";
import { github } from "@/data/github";
import { FaGithub } from "react-icons/fa6";

export default function GitHub() {
  return (
    <section
      id="github"
      className="bg-slate-100 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Open Source Engineering"
          title="GitHub Engineering Portfolio"
        />

        <p className="mx-auto mb-12 max-w-3xl text-center leading-8 text-slate-600 dark:text-slate-400">
          My GitHub showcases hands-on Cloud, DevOps, Platform Engineering,
          Infrastructure as Code, Kubernetes, Automation, Monitoring and Cloud
          Security projects. Every repository is part of my journey toward
          becoming a world-class Cloud & Platform Engineer through practical,
          production-inspired engineering.
        </p>

        {/* Hero Banner */}
        <div className="mb-12 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 p-10 text-white shadow-xl dark:border-slate-800">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <FaGithub className="text-4xl" />
                <h2 className="text-3xl font-bold">
                  {github.username}
                </h2>
              </div>

              <p className="text-lg leading-8 text-cyan-50">
                {github.headline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  {github.stats.repositories}
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  {github.stats.technologies}
                </span>

                <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
                  {github.stats.focus}
                </span>
              </div>
            </div>

            <a
              href={github.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 transition hover:scale-105 hover:bg-slate-100"
            >
              <FaGithub className="mr-2" />
              Visit GitHub Profile
            </a>
          </div>
        </div>

        {/* Featured Repository Categories */}
        <div className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "AWS",
            "Terraform",
            "Kubernetes",
            "CI/CD",
            "Monitoring",
            "Automation",
            "Cloud Security",
            "Platform Engineering",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item}
              </h3>
            </div>
          ))}
        </div>

        {/* Live GitHub Stats */}
        <GitHubStats />
      </div>
    </section>
  );
}