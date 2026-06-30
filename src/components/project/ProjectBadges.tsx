type ProjectBadgesProps = {
  category: string;
  difficulty: "Intermediate" | "Advanced" | "Enterprise";
};

export default function ProjectBadges({
  category,
  difficulty,
}: ProjectBadgesProps) {
  const difficultyStyles = {
    Enterprise:
      "bg-emerald-500 text-white border border-emerald-500",
    Advanced:
      "bg-amber-500 text-white border border-amber-500",
    Intermediate:
      "bg-slate-700 text-white border border-slate-700",
  };

  return (
    <div className="absolute left-5 top-5 flex flex-wrap gap-2">
      {/* Category */}
      <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-white shadow-md">
        {category}
      </span>

      {/* Difficulty */}
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold shadow-md ${difficultyStyles[difficulty]}`}
      >
        {difficulty}
      </span>
    </div>
  );
}