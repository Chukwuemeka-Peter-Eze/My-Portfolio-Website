export default function ProgressBar({
  progress,
}: {
  progress: number;
}) {
  return (
    <div className="mt-6">

      <div className="flex justify-between mb-2">

        <span>Progress</span>

        <span>{progress}%</span>

      </div>

      <div className="h-3 rounded-full bg-slate-800">

        <div
          className="h-3 rounded-full bg-cyan-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>
  );
}