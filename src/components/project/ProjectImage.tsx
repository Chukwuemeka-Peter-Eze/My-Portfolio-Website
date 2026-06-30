import Image from "next/image";

type ProjectImageProps = {
  title: string;
  image: string;
  architecture?: string;
};

export default function ProjectImage({
  title,
  image,
  architecture,
}: ProjectImageProps) {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={1200}
        height={700}
        className="h-64 w-full object-cover transition duration-500 hover:scale-105"
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Architecture Button */}
      {architecture && (
        <a
          href={architecture}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-4 top-4 rounded-xl bg-black/70 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-cyan-500"
        >
          View Architecture
        </a>
      )}
    </div>
  );
}