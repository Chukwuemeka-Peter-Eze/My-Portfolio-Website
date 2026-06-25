import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 font-medium">
          Cloud Security • DevOps • Platform Engineering
        </p>

        <h1 className="text-6xl font-bold mt-4">
          {profile.name}
        </h1>

        <h2 className="text-3xl mt-4 text-gray-700">
          {profile.role}
        </h2>

        <p className="mt-8 text-xl max-w-4xl leading-relaxed">
          I help organizations design secure,
          scalable and highly available cloud
          platforms through AWS, Kubernetes,
          Terraform, DevSecOps and modern
          infrastructure automation.
        </p>

        <div className="flex gap-4 mt-10">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            View Projects
          </button>

          <button className="border px-6 py-3 rounded-lg">
            Download Resume
          </button>

        </div>
      </div>
    </section>
  );
}