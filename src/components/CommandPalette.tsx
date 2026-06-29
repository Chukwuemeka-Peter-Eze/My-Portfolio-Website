"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";

type Command = {
  id: string;
  label: string;
  description: string;
  icon: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "about",
      label: "About",
      description: "Learn about Chukwuemeka",
      icon: "👤",
      action: () => scrollTo("about"),
    },
    {
      id: "projects",
      label: "Projects",
      description: "View engineering projects",
      icon: "🚀",
      action: () => scrollTo("projects"),
    },
    {
      id: "skills",
      label: "Skills",
      description: "View technical skills",
      icon: "⚙️",
      action: () => scrollTo("skills"),
    },
    {
      id: "experience",
      label: "Experience",
      description: "Professional experience",
      icon: "💼",
      action: () => scrollTo("experience"),
    },
    {
      id: "certifications",
      label: "Certifications",
      description: "Certification roadmap",
      icon: "📜",
      action: () => scrollTo("certifications"),
    },
    {
      id: "github",
      label: "GitHub",
      description: "View GitHub portfolio",
      icon: "🐙",
      action: () => scrollTo("github"),
    },
    {
      id: "blog",
      label: "Articles",
      description: "Technical writing on Medium",
      icon: "✍️",
      action: () => scrollTo("blog"),
    },
    {
      id: "contact",
      label: "Contact",
      description: "Get in touch",
      icon: "📧",
      action: () => scrollTo("contact"),
    },
    {
      id: "resume",
      label: "Download Resume",
      description: "Download PDF resume",
      icon: "⬇️",
      action: () => {
        window.open("/resume/chukwuemekapetereze_devops_resume.pdf", "_blank");
      },
    },
    {
      id: "certification-journey",
      label: "Certification Journey",
      description: "Full certification roadmap page",
      icon: "🗺️",
      action: () => {
        window.location.href = "/certification-journey";
      },
    },
    {
      id: "meeting",
      label: "Book a Meeting",
      description: "Schedule a call on Calendly",
      icon: "📅",
      action: () => {
        window.open("https://calendly.com/pierrechukason", "_blank");
      },
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      description: "View LinkedIn profile",
      icon: "💼",
      action: () => {
        window.open("https://www.linkedin.com/in/chukwuemekapetereze/", "_blank");
      },
    },
  ];

  function scrollTo(id: string) {
    setOpen(false);
    setQuery("");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const filtered = commands.filter(
    (cmd) =>
      cmd.label.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/60 pt-24 backdrop-blur-sm"
      onClick={() => {
        setOpen(false);
        setQuery("");
      }}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-800 dark:bg-slate-950"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-4 dark:border-slate-800">
          <span className="text-slate-400">⌘</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            className="flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
          />
          <kbd className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto py-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-slate-400">
              No commands found
            </p>
          ) : (
            filtered.map((cmd) => (
              <button
                key={cmd.id}
                onClick={cmd.action}
                className="flex w-full items-center gap-4 px-4 py-3 text-left transition hover:bg-slate-50 dark:hover:bg-slate-900"
              >
                <span className="text-xl">{cmd.icon}</span>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">
                    {cmd.label}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cmd.description}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 px-4 py-3 dark:border-slate-800">
          <p className="text-xs text-slate-400">
            Press{" "}
            <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">
              ⌘K
            </kbd>{" "}
            to open •{" "}
            <kbd className="rounded bg-slate-100 px-1.5 py-0.5 font-mono dark:bg-slate-800">
              ESC
            </kbd>{" "}
            to close
          </p>
        </div>
      </div>
    </div>
  );
}