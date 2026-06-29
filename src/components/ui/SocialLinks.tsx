import Link from "next/link";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { profile } from "@/data/profile";

export default function SocialLinks() {
  return (
    <div className="mt-8 flex items-center gap-5">
      <Link
        href={profile.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="text-2xl text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
      >
        <FaGithub />
      </Link>
      <Link
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-2xl text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
      >
        <FaLinkedin />
      </Link>
      <Link
        href={profile.medium}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Medium"
        className="text-2xl text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
      >
        <FaMedium />
      </Link>
    </div>
  );
}