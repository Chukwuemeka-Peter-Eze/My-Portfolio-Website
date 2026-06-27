const stats = [
  { label: "Projects", value: "20+" },
  { label: "Cloud Technologies", value: "15+" },
  { label: "Learning Hours", value: "1000+" },
  { label: "Certifications", value: "In Progress" },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-2xl font-bold text-cyan-500">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}