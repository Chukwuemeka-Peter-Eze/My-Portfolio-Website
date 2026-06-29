import SectionTitle from "@/components/SectionTitle";
import MediumFeed from "@/components/ui/MediumFeed";

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-24 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Technical Writing"
          title="Latest Articles"
        />

        <p className="mb-12 max-w-2xl text-slate-500 dark:text-slate-400">
          I write about cloud engineering, DevOps practices, AWS architecture,
          Kubernetes, Terraform, and the lessons I learn building real
          infrastructure. Articles update automatically as I publish.
        </p>

        <MediumFeed />

        <div className="mt-16 text-center">
          <a         
            href="https://medium.com/@ChukwuemekaPeterEze"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            View All Articles on Medium →
          </a>
        </div>
      </div>
    </section>
  );
}