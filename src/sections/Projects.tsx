import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          subtitle="Portfolio"
          title="Featured Engineering Projects"
        />
        <Stagger>
          <div className="grid gap-10 lg:grid-cols-2">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <ProjectCard project={project} />
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
