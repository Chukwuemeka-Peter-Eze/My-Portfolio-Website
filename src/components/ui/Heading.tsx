type HeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}