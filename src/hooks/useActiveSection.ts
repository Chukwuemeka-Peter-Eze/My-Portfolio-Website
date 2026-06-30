"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "certifications",
  "github",
  "blog",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Offset for the fixed navbar
      const scrollPosition = window.scrollY + 180;

      let currentSection = "home";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        if (scrollPosition >= section.offsetTop) {
          currentSection = id;
        }
      }

      setActiveSection(currentSection);
    };

    // Set active section on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return activeSection;
}