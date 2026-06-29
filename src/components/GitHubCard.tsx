type Repository = {
  name: string;
  description: string;
};

export default function GitHubCard({
  repository,
}: {
  repository: Repository;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-xl font-bold">{repository.name}</h3>
      <p className="mt-3 text-slate-500 dark:text-slate-400">
        {repository.description}
      </p>
    </div>
  );
}