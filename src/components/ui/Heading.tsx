type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function Heading({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-widest text-cyan-500">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-500 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}