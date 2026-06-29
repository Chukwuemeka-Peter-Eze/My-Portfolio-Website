import Image from "next/image";
import { profile } from "@/data/profile";

export default function ProfileCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">
      <div className="relative h-90 w-full overflow-hidden bg-gradient-to-br from-cyan-500/20 via-slate-800/10 to-slate-900/20">
        <Image
          src="/images/profile.jpg"
          alt={profile.name}
          fill
          priority
          loading="eager"
          className="object-cover transition-transform duration-500 hover:scale-105"
          style={{
            objectPosition: "center 18%",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{profile.name}</h3>

        <p className="mt-1 text-sm font-medium text-cyan-500">
          {profile.title}
        </p>

        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {profile.tagline}
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
          <span>📍</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </div>
  );
}