type Props = {
  children: React.ReactNode;
};

export default function Badge({ children }: Props) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400">
      🌍 {children}
    </span>
  );
}