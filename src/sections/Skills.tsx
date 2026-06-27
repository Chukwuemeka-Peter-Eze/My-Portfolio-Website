import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          subtitle="Technical Expertise"
          title="Skills & Technologies"
        />

        <div className="grid gap-10 md:grid-cols-2">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
            >
              <h3 className="mb-6 text-2xl font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                  />
                ))}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}