type SkillBadgeProps = {
  skill: string;
};

export default function SkillBadge({
  skill,
}: SkillBadgeProps) {
  return (
    <div
      className="
      rounded-full
      border
      border-slate-700
      bg-slate-900
      px-4
      py-2
      text-sm
      font-medium
      transition
      duration-300
      hover:border-cyan-400
      hover:text-cyan-400
      "
    >
      {skill}
    </div>
  );
}