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
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400 hover:-translate-y-1">

      <h3 className="text-xl font-bold">
        {repository.name}
      </h3>

      <p className="mt-3 text-slate-400">
        {repository.description}
      </p>

    </div>
  );
}