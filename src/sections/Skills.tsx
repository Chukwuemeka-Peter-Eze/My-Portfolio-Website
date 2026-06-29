import SectionTitle from "@/components/SectionTitle";
import TechBadge from "@/components/ui/TechBadge";
import { skillCategories } from "@/data/skills";

import {
  Cloud,
  Server,
  Boxes,
  Workflow,
  Shield,
  Activity,
  Code2,
  Network,
} from "lucide-react";

const categoryIcons = {
  cloud: Cloud,
  server: Server,
  boxes: Boxes,
  workflow: Workflow,
  shield: Shield,
  activity: Activity,
  code: Code2,
  network: Network,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-100 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
        />

        <div className="grid gap-10 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon =
              categoryIcons[
                category.icon as keyof typeof categoryIcons
              ];

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
              >
                <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
                  <Icon
                    className="h-6 w-6 text-cyan-500"
                    strokeWidth={2.3}
                  />
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <TechBadge
                      key={skill}
                      skill={skill}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}