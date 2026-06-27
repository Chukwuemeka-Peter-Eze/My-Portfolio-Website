import FadeUp from "@/components/animations/FadeUp";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>
        <FadeUp>
          <SectionTitle
            subtitle="Let's Connect"
            title="Let's Build Something Great Together"
          />

          <p className="mb-10 leading-8 text-slate-300">
            I'm passionate about helping organizations design,
            automate, and secure modern cloud infrastructure.
            I'm open to remote, global, and relocation opportunities
            in Cloud Engineering, DevOps, Platform Engineering,
            Cloud Security, and Cloud Architecture.
          </p>

          <div className="space-y-6 text-lg">

            {/* Email */}
            <p>
              📧{" "}
              <a
                href={`mailto:${contact.email}`}
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                {contact.email}
              </a>
            </p>

            {/* Location */}
            <p>
              📍 {contact.location}
            </p>

            {/* Availability */}
            <p>
              🌍 {contact.availability}
            </p>

            {/* LinkedIn */}
            <p>
              💼{" "}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                LinkedIn
              </a>
            </p>

            {/* GitHub */}
            <p>
              🐙{" "}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                GitHub
              </a>
            </p>

            {/* Medium */}
            <p>
              ✍{" "}
              <a
                href={contact.medium}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Medium
              </a>
            </p>

            {/* Notion */}
            <p>
              📚{" "}
              <a
                href={contact.notion}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Engineering Documentation
              </a>
            </p>

          </div>
        </FadeUp>
        </div>

        {/* Right Side */}
        <ContactForm />

      </div>
    </section>
  );
}