import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  external?: boolean;
};

export default function Button({
  href,
  children,
  variant = "primary",
  external = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300 hover:scale-105";

  const styles = {
    primary: `${base} bg-cyan-500 text-slate-950 hover:bg-cyan-400`,
    outline: `${base} border border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white`,
  };

  if (external) {
    return (
      <a     
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles[variant]}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles[variant]}>
      {children}
    </Link>
  );
}