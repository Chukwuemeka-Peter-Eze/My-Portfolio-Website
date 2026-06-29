import Link from "next/link";
import Container from "./ui/Container";
import { profile } from "@/data/profile";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa6";
import { FileText } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {profile.name}
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400">
              Cloud Security Engineer • DevOps Engineer • Platform Engineer
            </p>
            <p className="mt-6 italic text-cyan-500">
              "{profile.motto}"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["about", "projects", "experience", "blog", "contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item}`}
                    className="capitalize text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
              Connect
            </h3>
            <div className="flex gap-5 text-2xl">
              <Link
                href={profile.github}
                target="_blank"
                aria-label="GitHub"
                className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FaGithub />
              </Link>
              <Link
                href={profile.linkedin}
                target="_blank"
                aria-label="LinkedIn"
                className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FaLinkedin />
              </Link>
              <Link
                href={profile.medium}
                target="_blank"
                aria-label="Medium"
                className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FaMedium />
              </Link>
              <Link
                href="/resume"
                aria-label="Resume"
                className="text-slate-500 transition hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
              >
                <FileText size={24} />
              </Link>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-400 dark:border-slate-800">
          © {year} {profile.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}