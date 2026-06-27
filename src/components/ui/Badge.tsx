type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span
      className="
        rounded-full
        bg-cyan-100
        px-4
        py-1
        text-sm
        font-semibold
        text-cyan-700

        dark:bg-cyan-500/20
        dark:text-cyan-300
      "
    >
      {children}
    </span>
  );
}