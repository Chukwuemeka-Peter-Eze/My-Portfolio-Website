import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl">

      <Image
        src="/images/profile.jpg"
        alt="Chukwuemeka Peter Eze"
        width={320}
        height={320}
        className="rounded-2xl mx-auto"
      />

      <h3 className="mt-6 text-center text-2xl font-bold">
        Chukwuemeka Peter Eze
      </h3>

      <p className="mt-2 text-center text-cyan-500">
        Cloud Security & DevOps Engineer
      </p>

      <p className="mt-4 text-center text-slate-500 dark:text-slate-400">
        Building secure, scalable cloud infrastructure and modern DevSecOps platforms.
      </p>

    </div>
  );
}