import TechnologyIcon from "./TechnologyIcon";

type Props = {
  skill: string;
};

export default function TechBadge({ skill }: Props) {
  return (
    <div
      className="
      flex
      items-center
      gap-3
      rounded-xl
      border
      border-slate-200
      bg-white
      px-4
      py-3
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-lg

      dark:bg-slate-900
      dark:border-slate-700
      "
    >
      <TechnologyIcon name={skill} />

      <span className="font-medium text-slate-800 dark:text-white">
        {skill}
      </span>
    </div>
  );
}