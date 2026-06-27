type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-12">

      {subtitle && (
        <p className="text-blue-400 uppercase tracking-widest text-sm">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl md:text-5xl font-bold mt-2">
        {title}
      </h2>

    </div>
  );
}