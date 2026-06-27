import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  className?: string;
};

export default function Section({
  children,
  id,
  className = "",
}: Props) {
  return (
    <section
      id={id}
      className={`
        py-24
        px-6
        transition-colors
        duration-300
        bg-white
        text-slate-900
        dark:bg-slate-950
        dark:text-white
        ${className}
      `}
    >
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </section>
  );
}