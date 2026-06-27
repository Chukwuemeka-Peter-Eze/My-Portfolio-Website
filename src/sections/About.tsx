import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <Section id="about">
      <Container>

        <Heading
          eyebrow="About Me"
          title="Building Secure, Scalable Cloud Platforms"
          subtitle="I'm passionate about designing cloud infrastructure that is secure, reliable, automated, and production-ready."
        />

        <Card>

          <div className="space-y-6">

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              I'm a Cloud Security & DevOps Engineer focused on AWS,
              Kubernetes, Terraform, Infrastructure as Code,
              Platform Engineering, and DevSecOps.

              My goal is to help organizations build secure,
              scalable, highly available cloud platforms that
              are automated from infrastructure provisioning
              to deployment and monitoring.
            </p>

            <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
              Every project in this portfolio reflects
              real-world engineering practices including
              CI/CD, Infrastructure as Code, Kubernetes,
              monitoring, observability, cloud security,
              and automation.
            </p>

            <Button href="#projects">
              Explore My Projects
            </Button>

          </div>

        </Card>

      </Container>
    </Section>
  );
}