import FadeUp from "@/components/animations/FadeUp";
import SocialLinks from "@/components/ui/SocialLinks";
import TechStack from "@/components/ui/TechStack";
import ProfileCard from "@/components/ui/ProfileCard";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import StatCard from "@/components/ui/StatCard";
import Badge from "@/components/ui/Badge";
import BookMeeting from "@/components/BookMeeting";
import { profile } from "@/data/profile";
import { stats } from "@/data/stats";

export default function Hero() {
  return (
    <Section className="pt-40">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <FadeUp>
            <div>
              <Badge>
                Open to Remote • Global • Relocation
              </Badge>

              <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-900 dark:text-white lg:text-7xl">
                {profile.name}
              </h1>

              <h2 className="mt-6 text-2xl font-semibold text-cyan-500">
                Cloud Security Engineer • DevOps Engineer • Platform Engineer
              </h2>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                Designing secure, scalable cloud infrastructure using AWS,
                Kubernetes, Terraform, DevSecOps, Infrastructure as Code,
                and Platform Engineering best practices.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a     
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-cyan-600"
                >
                  🚀 View Projects
                </a>

                <a                 
                  href="/resume/chukwuemekapetereze_devops_resume.pdf"
                  download
                  className="inline-flex items-center justify-center rounded-xl border border-cyan-500 px-6 py-3 font-semibold text-cyan-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white"
                >
                  ⬇ Download Resume
                </a>

                <BookMeeting />
              </div>

              <TechStack />
              <SocialLinks />
            </div>
          </FadeUp>

          {/* Right */}
          <FadeUp delay={0.3}>
            <div className="space-y-6">
              <ProfileCard />
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </div>
            </div>
          </FadeUp>

        </div>
      </Container>
    </Section>
  );
}