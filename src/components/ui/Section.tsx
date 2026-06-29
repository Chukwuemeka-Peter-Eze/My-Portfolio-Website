type Props = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export default function Section({ children, id, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`py-24 ${className}`}
    >
      {children}
    </section>
  );
}