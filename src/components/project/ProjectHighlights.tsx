type ProjectHighlightsProps = {
  highlights: string[];
};

export default function ProjectHighlights({
  highlights,
}: ProjectHighlightsProps) {
  if (!highlights?.length) return null;

  return (
    <div className="mt-8">
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-500">
        Engineering Highlights
      </h4>

      <ul className="space-y-3">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
          >
            <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-xs font-bold text-white">
              ✓
            </span>

            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}