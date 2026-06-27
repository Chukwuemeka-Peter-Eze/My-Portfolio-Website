type Props = {
  skill: string;
};

export default function SkillPill({ skill }: Props) {
  return (
    <span className="rounded-full border border-cyan-500/40 bg-slate-800 px-3 py-1 text-sm text-cyan-300">
      {skill}
    </span>
  );
}