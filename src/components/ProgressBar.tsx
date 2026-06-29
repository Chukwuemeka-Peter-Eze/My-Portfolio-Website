export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="mt-6">
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-slate-600 dark:text-slate-400">Progress</span>
        <span className="font-semibold text-cyan-500">{progress}%</span>
      </div>
      <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800">
        <div
          className="h-3 rounded-full bg-cyan-400 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}