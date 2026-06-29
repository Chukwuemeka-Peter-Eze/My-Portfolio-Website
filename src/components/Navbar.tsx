"use client";

import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import clsx from "clsx";
import { Menu, X, House } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import useActiveSection from "@/hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll();

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-slate-200/70 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/90"
          : "bg-transparent"
      )}
    >
      <div
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300",
          scrolled ? "py-3" : "py-5"
        )}
      >
        {/* Logo */}
        {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group flex items-center transition-all duration-300"
          >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-cyan-600 dark:bg-cyan-400 dark:text-slate-950 dark:group-hover:bg-cyan-300">
            <House size={22} strokeWidth={2.3} />
          </div>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.map((item) => (
            <a         
              key={item.name}
              href={item.href}
              className={clsx(
                "text-sm transition-all duration-300 hover:text-cyan-500",
                activeSection === item.href.substring(1)
                  ? "font-semibold text-cyan-500"
                  : "text-slate-600 dark:text-slate-300"
              )}
            >
              {item.name}
            </a>
          ))}
          <Link
            href="/certification-journey"
            className="rounded-lg border border-cyan-500 px-4 py-2 text-sm text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
          >
            Certification Journey
          </Link>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-700 dark:text-slate-300 lg:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <a             
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-700 transition hover:text-cyan-500 dark:text-slate-300"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="/certification-journey"
              onClick={() => setIsOpen(false)}
              className="rounded-lg border border-cyan-500 px-4 py-2 text-center text-sm text-cyan-500 transition hover:bg-cyan-500 hover:text-white"
            >
              Certification Journey
            </Link>
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                bubbles: true,
              });
                window.dispatchEvent(event);
              }}
              className="hidden items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-500 transition hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-400 lg:flex"
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}