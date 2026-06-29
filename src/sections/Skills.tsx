import SectionTitle from "@/components/SectionTitle";
import SkillBadge from "@/components/SkillBadge";
import TechBadge from "@/components/ui/TechBadge";
import { skillCategories } from "@/data/skills";

const iconSkills = new Set([
  "AWS", "Terraform", "Docker", "Kubernetes", "Helm",
  "Git", "GitHub Actions", "Jenkins", "Prometheus",
  "Grafana", "Python", "Linux", "IAM", "VPC",
  "EC2", "S3", "RDS", "AWS KMS",
]);

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
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-slate-800 dark:bg-slate-950 dark:hover:border-slate-700"
            >
              <h3 className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) =>
                  iconSkills.has(skill) ? (
                    <TechBadge key={skill} skill={skill} />
                  ) : (
                    <SkillBadge key={skill} skill={skill} />
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}