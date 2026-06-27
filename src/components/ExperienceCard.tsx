type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
};

export default function ExperienceCard({
  job,
}: {
  job: Experience;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-8">

      <span className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">
        {job.period}
      </span>

      <h3 className="mt-6 text-3xl font-bold">
        {job.role}
      </h3>

      <h4 className="mt-2 text-cyan-400">
        {job.company}
      </h4>

      <p className="mb-8 text-slate-400">
        {job.location}
      </p>

      <ul className="space-y-3">

        {job.achievements.map((achievement) => (
          <li
            key={achievement}
            className="flex gap-3"
          >
            <span className="text-cyan-400">✓</span>

            <span className="text-slate-300">
              {achievement}
            </span>
          </li>
        ))}

      </ul>

    </div>
  );
}