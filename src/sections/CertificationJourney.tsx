import CertificationJourneyCard from "@/components/CertificationJourneyCard";
import { certificationJourney } from "@/data/certificationJourney";

export default function CertificationJourney() {
  return (
    <section className="min-h-screen bg-slate-950 text-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}

        <div className="mb-20 text-center">

          <p className="text-cyan-400 uppercase tracking-[0.3em]">
            Professional Development
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Certification Journey
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Continuous learning is at the heart of my engineering career.
            This roadmap highlights the certifications I'm actively pursuing
            to strengthen my expertise in Cloud Engineering, DevOps,
            DevSecOps, Kubernetes, Platform Engineering,
            Cloud Security, and Infrastructure Automation.
          </p>

        </div>

        {/* Cards */}

        <div className="space-y-12">

          {certificationJourney.map((certification) => (

            <CertificationJourneyCard
              key={certification.id}
              certification={certification}
            />

          ))}

        </div>

      </div>
    </section>
  );
}