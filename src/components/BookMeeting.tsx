import Link from "next/link";

export default function BookMeeting() {
  return (
    <Link
      href="https://calendly.com/pierrechukason"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
    >
      📅 Book a Meeting
    </Link>
  );
}