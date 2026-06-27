import ScaleIn from "@/components/animations/ScaleIn";
import SectionTitle from "@/components/SectionTitle";
import ExperienceCard from "@/components/ExperienceCard";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-6xl px-6">

        <SectionTitle
          subtitle="Career Journey"
          title="Professional Experience"
        />

        <div className="space-y-10">
        <ScaleIn>
          {experience.map((job) => (
            <ExperienceCard
              key={job.company}
              job={job}
            />
          ))}
        </ScaleIn>
        </div>

      </div>
    </section>
  );
}