type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}