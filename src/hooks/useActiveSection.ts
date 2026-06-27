"use client";

import { useEffect, useState } from "react";

const sectionIds = [
  "about",
  "skills",
  "projects",
  "experience",
  "certifications",
  "blog",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return activeSection;
}