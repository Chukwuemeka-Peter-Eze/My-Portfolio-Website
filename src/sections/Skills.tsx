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
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Technical Expertise"
          title="Enterprise Cloud & DevOps Technology Stack"
        />

        <p className="mx-auto mb-16 max-w-3xl text-center leading-8 text-slate-600 dark:text-slate-400">
          Hands-on experience designing, deploying, automating, securing, and
          operating cloud-native infrastructure using modern DevOps,
          Platform Engineering, Kubernetes, Infrastructure as Code, GitOps,
          Observability, and DevSecOps technologies.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon =
              categoryIcons[
                category.icon as keyof typeof categoryIcons
              ];

            return (
              <div
                key={category.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950 dark:hover:border-cyan-500"
              >
                <h3 className="mb-6 flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
                  <Icon
                    className="h-6 w-6 text-cyan-500 transition-transform duration-300 group-hover:scale-110"
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