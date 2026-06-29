import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import FadeUp from "@/components/animations/FadeUp";

const values = [
  {
    icon: "🔐",
    title: "Security First",
    description:
      "Every architecture decision starts with the question: how could this be compromised? I design with least privilege, defense in depth, and zero trust from day one.",
  },
  {
    icon: "⚙️",
    title: "Automate Everything",
    description:
      "Manual processes are technical debt. I build Infrastructure as Code, CI/CD pipelines, and automated monitoring so teams ship faster with fewer incidents.",
  },
  {
    icon: "📈",
    title: "Continuous Improvement",
    description:
      "I track certifications, build real projects, and write about what I learn. Engineering is a practice, not a destination.",
  },
];

export default function About() {
  return (
    <Section id="about">
      <Container>
        <FadeUp>
          <Heading
            eyebrow="About Me"
            title="Building Secure, Scalable Cloud Platforms"
            subtitle="Cloud Security & DevOps Engineer focused on AWS, Kubernetes, Terraform, and DevSecOps."
          />
        </FadeUp>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Story */}
          <FadeUp delay={0.1}>
            <Card>
              <div className="space-y-5">
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I'm a Cloud Security & DevOps Engineer on a focused mission:
                  to design and operate cloud infrastructure that organizations
                  can trust, infrastructure that is secure by design,
                  automated end-to-end, and built to scale globally.
                </p>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  My engineering journey spans AWS cloud architecture, Kubernetes
                  container platforms, Terraform infrastructure as code, CI/CD
                  automation, DevSecOps pipelines, and observability platforms.
                  Every project in this portfolio was built following real-world
                  production engineering practices, not tutorials.
                </p>
                <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
                  I'm actively pursuing AWS, Kubernetes, and Terraform
                  certifications while building hands-on projects that
                  demonstrate what I can do, because credentials matter,
                  but working infrastructure matters more.
                </p>
                <p className="font-medium italic text-cyan-500">
                  "Learn relentlessly. Build intentionally. Improve continuously."
                </p>
                <div className="pt-2">
                  <Button href="#projects">
                    Explore My Projects →
                  </Button>
                </div>
              </div>
            </Card>
          </FadeUp>

          {/* Values */}
          <FadeUp delay={0.2}>
            <div className="space-y-6">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{value.icon}</span>
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Quick Facts */}
              <div className="rounded-2xl border border-cyan-500/20 bg-cyan-50 p-6 dark:bg-cyan-500/5">
                <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                  Quick Facts
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  <li>📍 Based in Nigeria; open to global remote & relocation</li>
                  <li>🎯 Currently: TechWorld with Nana DevOps Bootcamp (45%)</li>
                  <li>📜 Pursuing: AWS Cloud Practitioner, CKA, Terraform Associate</li>
                  <li>✍️ Writing about cloud engineering on Medium</li>
                  <li>🤝 Available for freelance, contract & full-time roles</li>
                </ul>
              </div>
            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>
  );
}