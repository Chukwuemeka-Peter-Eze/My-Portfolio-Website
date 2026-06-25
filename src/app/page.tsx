export default function Home() {
  const projects = [
  {
    title: "AWS Secure Multi-Tier Infrastructure",
    description:
      "Designed a secure AWS architecture using VPC, EC2, IAM, Security Groups, Route53 and load balancing."
  },

  {
    title: "Infrastructure as Code with Terraform",
    description:
      "Provisioned and managed AWS infrastructure using reusable Terraform modules and automated deployments."
  },

  {
    title: "Kubernetes Container Platform",
    description:
      "Containerized applications using Docker and deployed workloads on Kubernetes clusters."
  },

  {
    title: "CI/CD Automation Pipeline",
    description:
      "Implemented GitHub Actions and Jenkins pipelines for automated build, test and deployment workflows."
  },

  {
    title: "DevSecOps Pipeline Implementation",
    description:
      "Integrated security controls, secrets management and secure deployment practices into CI/CD workflows."
  },

  {
    title: "Monitoring & Observability Platform",
    description:
      "Built monitoring solutions using CloudWatch, Prometheus, Grafana and centralized logging."
  }
];
  return (
    <main className="bg-slate-950 text-white">
      <nav className="fixed top-0 left-0 right-0 bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">

  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="font-bold text-xl">
      Chukwuemeka Peter Eze
    </h1>

    <ul className="hidden md:flex gap-8 text-slate-300">

      <li>
        <a href="#about">About</a>
      </li>

      <li>
        <a href="#skills">Skills</a>
      </li>

      <li>
        <a href="#projects">Projects</a>
      </li>

      <li>
        <a href="#experience">Experience</a>
      </li>

      <li>
        <a href="#certifications">Certifications</a>
      </li>

      <li>
        <a href="#contact">Contact</a>
      </li>

    </ul>

  </div>

</nav>

      {/* HERO */}

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="max-w-5xl text-center">

          <p className="text-blue-400 font-semibold mb-4">
            AWS • Kubernetes • Terraform • DevSecOps
          </p>

          <h1 className="text-6xl md:text-7xl font-bold">
            Chukwuemeka Peter Eze
          </h1>

          <h2 className="text-2xl mt-6 text-slate-300">
            Cloud Security & DevOps Engineer
          </h2>

          <p className="text-xl text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
            Designing secure cloud infrastructure,
            automating deployments,
            implementing DevSecOps practices,
            and building scalable cloud-native platforms.
          </p>

          <div className="flex justify-center gap-4 mt-10">

            <button className="bg-blue-600 px-6 py-3 rounded-lg">
              View Projects
            </button>

            <button className="border border-slate-500 px-6 py-3 rounded-lg">
              Download Resume
            </button>

          </div>

        </div>

      </section>

      <section className="border-y border-slate-800">

  <div className="max-w-6xl mx-auto py-16 px-6">

    <div className="grid md:grid-cols-4 gap-10 text-center">

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          6+
        </h3>
        <p>Cloud & DevOps Projects</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          AWS
        </h3>
        <p>Cloud Platform Focus</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          IaC
        </h3>
        <p>Terraform & Automation</p>
      </div>

      <div>
        <h3 className="text-4xl font-bold text-blue-400">
          DevSecOps
        </h3>
        <p>Security First Engineering</p>
      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}

      <section id="about"
        className="py-24 px-6 max-w-6xl mx-auto"
       >

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-slate-300 text-lg leading-8">
          Cloud Security & DevOps Engineer focused on
          designing, automating and securing cloud-native
          infrastructure using AWS, Terraform,
          Docker, Kubernetes and modern DevSecOps practices.
        </p>

      </section>

      {/* SKILLS */}

      <section id="skills"
        className="py-24 bg-slate-900"
       >

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-10">
            Technical Skills
          </h2>

          <div className="flex flex-wrap gap-4">

            {[
              "AWS",
              "Terraform",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "Jenkins",
              "Linux",
              "Python",
              "Cloud Security",
              "DevSecOps",
              "Prometheus",
              "Grafana",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 px-5 py-3 rounded-lg"
              >
                {skill}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}

      <section id="projects"
        className="py-24 px-6 max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
  <div
    key={project.title}
    className="bg-slate-900 rounded-2xl overflow-hidden"
  >
    <div className="h-56 bg-slate-700 flex items-center justify-center">

      Architecture Diagram

    </div>

    <div className="p-8">

      <h3 className="text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mt-4 text-slate-400">
        {project.description}
      </p>

    </div>

  </div>
))}

        </div>

      </section>

      {/* EXPERIENCE */}

      <section
  id="experience"
  className="bg-slate-900 py-24"
>
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold mb-12">
      Professional Experience
    </h2>

    <div className="space-y-12">

      <div className="border-l-4 border-blue-500 pl-6">

        <h3 className="text-2xl font-bold">
          Cloud Security & DevOps Engineer (Intern)
        </h3>

        <p className="text-blue-400 mt-2">
          Digital Witch Support Community | Remote
        </p>

        <p className="text-slate-500 mt-1">
          Jun 2025 – May 2026
        </p>

        <p className="text-slate-300 mt-4 leading-8">
          Designed and deployed secure AWS
          environments using IAM, VPC networking,
          Security Groups, Network ACLs, EC2,
          RDS, S3, Route53 and Auto Scaling.

          Implemented Infrastructure as Code
          using Terraform and CloudFormation
          while building CI/CD pipelines with
          GitHub Actions and Jenkins.
        </p>

      </div>

      <div className="border-l-4 border-blue-500 pl-6">

        <h3 className="text-2xl font-bold">
          Remote IT Operations & Workflow Systems Support
        </h3>

        <p className="text-blue-400 mt-2">
          Capable Solutions | Texas, USA (Remote)
        </p>

        <p className="text-slate-500 mt-1">
          Sept 2024 – Present
        </p>

        <p className="text-slate-300 mt-4 leading-8">
          Supported IT operations, workflow
          optimization, CRM systems, reporting,
          data management, process automation
          initiatives and operational reliability
          across distributed teams.
        </p>

      </div>

    </div>

  </div>
</section>

      {/* CERTIFICATIONS */}

      <section id="certifications"
        className="py-24 px-6 max-w-6xl mx-auto"
      >

        <h2 className="text-4xl font-bold mb-12">
          Certifications Roadmap
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "AWS Cloud Practitioner",
            "AWS Solutions Architect",
            "Terraform Associate",
            "CKA",
            "DevOps Bootcamp",
            "DevSecOps Bootcamp",
          ].map((cert) => (
            <div
              key={cert}
              className="bg-slate-900 p-6 rounded-xl"
            >
              {cert}
            </div>
          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section
  id="contact"
  className="bg-slate-900 py-24"
>

  <div className="max-w-4xl mx-auto text-center px-6">

    <h2 className="text-4xl font-bold">
      Let's Connect
    </h2>

    <p className="mt-6 text-slate-400">
      Open to 
      <br></br>
      Cloud Security Engineer • DevOps Engineer • DevSecOps Engineer • Platform Engineer • Cloud Infrastructure Engineer 
      <br></br>
      Site Reliability Engineer (SRE) • Cloud Architecture
      <br></br>
      Remote, Global & Relocation Opportunities
    </p>

    <div className="flex justify-center gap-6 mt-10 flex-wrap">

      <a
        href="https://github.com/Chukwuemeka-Peter-Eze"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/chukwuemekapetereze/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-800 px-6 py-3 rounded-lg"
      >
        LinkedIn
      </a>

      <a
        href="https://medium.com/@ChukwuemekaPeterEze"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-slate-800 px-6 py-3 rounded-lg"
      >
        Medium
      </a>

    </div>

  </div>

</section>

      {/* FOOTER */}

      <footer className="border-t border-slate-800 py-10 text-center">

        <p className="text-slate-500">
          © 2026 Chukwuemeka Peter Eze
        </p>

      </footer>

    </main>
  );
}