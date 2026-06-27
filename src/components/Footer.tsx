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
            <h2 className="text-2xl font-bold">
              {profile.name}
            </h2>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Cloud Security Engineer • DevOps Engineer • Platform Engineer
            </p>

            <p className="mt-6 italic text-cyan-500">
              "Learn relentlessly.
              Build intentionally.
              Improve continuously."
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><Link href="#about">About</Link></li>
              <li><Link href="#projects">Projects</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#blog">Blog</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}

          <div>
            <h3 className="font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <Link
                href={profile.github}
                target="_blank"
              >
                <FaGithub />
              </Link>

              <Link
                href={profile.linkedin}
                target="_blank"
              >
                <FaLinkedin />
              </Link>

              <Link
                href={profile.medium}
                target="_blank"
              >
                <FaMedium />
              </Link>

              <Link
                href="/resume"
              >
                <FileText />
              </Link>

            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-slate-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-800">
          © {year} {profile.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}