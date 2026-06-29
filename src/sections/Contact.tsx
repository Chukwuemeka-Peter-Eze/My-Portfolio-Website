import FadeUp from "@/components/animations/FadeUp";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import BookMeeting from "@/components/BookMeeting";
import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-100 py-24 dark:bg-slate-900"
    >
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

        <div>
          <FadeUp>
            <SectionTitle
              subtitle="Let's Connect"
              title="Let's Build Something Great Together"
            />

            <p className="mb-10 leading-8 text-slate-600 dark:text-slate-300">
              I'm passionate about helping organizations design, automate, and
              secure modern cloud infrastructure. I'm open to remote, global,
              and relocation opportunities in Cloud Engineering, DevOps,
              Platform Engineering, Cloud Security, and Cloud Architecture.
            </p>

            <div className="space-y-5 text-base">
              <p>
                📧{" "}
                <a    
                  href={`mailto:${contact.email}`}
                  className="text-cyan-500 hover:text-cyan-400 hover:underline"
                >
                  {contact.email}
                </a>
              </p>
              <p>📍 {contact.location}</p>
              <p>🌍 {contact.availability}</p>
              <p>
                💼{" "}
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 hover:underline"
                >
                  LinkedIn
                </a>
              </p>
              <p>
                🐙{" "}
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 hover:underline"
                >
                  GitHub
                </a>
              </p>
              <p>
                ✍{" "}
                <a
                  href={contact.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 hover:underline"
                >
                  Medium
                </a>
              </p>
              <p>
                📚{" "}
                <a           
                  href={contact.notion}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-500 hover:text-cyan-400 hover:underline"
                >
                  Engineering Documentation
                </a>
              </p>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                Prefer to schedule a call?
              </p>
              <BookMeeting />
            </div>
          </FadeUp>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}