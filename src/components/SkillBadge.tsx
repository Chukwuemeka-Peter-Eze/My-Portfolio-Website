type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <div className="rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition duration-300 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400">
      {skill}
    </div>
  );
}