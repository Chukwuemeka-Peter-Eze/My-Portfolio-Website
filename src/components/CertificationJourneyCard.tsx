import Image from "next/image";
import ProgressBar from "./ProgressBar";
import SkillPill from "./SkillPill";

type Certification = {
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

function getStatusClasses(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-500 text-black";
    case "In Progress":
      return "bg-yellow-400 text-black";
    case "Planned":
      return "bg-blue-500 text-white";
    default:
      return "bg-slate-300 text-slate-800 dark:bg-slate-700 dark:text-white";
  }
}

export default function CertificationJourneyCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      {/* Header */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
          <Image
            src={certification.logo}
            alt={certification.title}
            width={64}
            height={64}
            className="object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-bold">{certification.title}</h2>
            <span
              className={`rounded-full px-4 py-1 text-sm font-semibold ${getStatusClasses(
                certification.status
              )}`}
            >
              {certification.status}
            </span>
          </div>
          <p className="mt-2 text-cyan-500">{certification.provider}</p>
          <p className="mt-1 text-sm text-slate-400">
            Target Completion: {certification.expected}
          </p>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar progress={certification.progress} />

      {/* Skills */}
      <section className="mt-8">
        <h3 className="mb-4 text-lg font-semibold">Skills You'll Gain</h3>
        <div className="flex flex-wrap gap-2">
          {certification.skills.map((skill) => (
            <SkillPill key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mt-8">
        <h3 className="mb-3 text-lg font-semibold">Related GitHub Projects</h3>
        {certification.github.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5 text-slate-500 dark:text-slate-300">
            {certification.github.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400">
            Projects will be added during this certification journey.
          </p>
        )}
      </section>

      {/* Blog */}
      <section className="mt-8">
        <h3 className="mb-3 text-lg font-semibold">Related Articles</h3>
        {certification.blog.length > 0 ? (
          <ul className="list-disc space-y-2 pl-5 text-slate-500 dark:text-slate-300">
            {certification.blog.map((article) => (
              <li key={article}>{article}</li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400">
            Articles will be published as I progress.
          </p>
        )}
      </section>

      {/* Footer */}
      <div className="mt-10 grid gap-6 border-t border-slate-200 pt-6 dark:border-slate-700 md:grid-cols-2">
        <div>
          <h4 className="font-semibold">Digital Badge</h4>
          <p className="mt-2 text-slate-400">
            Available after certification is earned.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Credential Verification</h4>
          <p className="mt-2 text-slate-400">
            Verification link will be added after certification completion.
          </p>
        </div>
      </div>
    </article>
  );
}