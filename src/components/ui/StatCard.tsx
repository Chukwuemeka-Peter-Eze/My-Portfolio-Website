type Props = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-2xl font-bold text-cyan-500">{value}</h3>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}