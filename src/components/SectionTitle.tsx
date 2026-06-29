type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-12">
      {subtitle && (
        <p className="text-sm uppercase tracking-widest text-cyan-500">
          {subtitle}
        </p>
      )}
      <h2 className="mt-2 text-4xl font-bold md:text-5xl">{title}</h2>
    </div>
  );
}