import FadeUp from "@/components/animations/FadeUp";
import SectionTitle from "@/components/SectionTitle";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          subtitle="Continuous Learning"
          title="Professional Certifications Roadmap"
        />

        <p className="mb-12 max-w-4xl text-lg leading-8 text-slate-400">
          Continuous learning is a core part of my engineering journey.
          My certification roadmap focuses on Cloud Engineering,
          DevOps, DevSecOps, Kubernetes, Infrastructure as Code,
          Cloud Security, and Platform Engineering.
        </p>

        <div className="grid gap-8 lg:grid-cols-2">

          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
            />
          ))}


        </div>

      </div>
    </section>
  );
}