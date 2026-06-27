import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
} from "react-icons/fa6";

export default function SocialLinks() {
  return (
    <div className="flex gap-4 mt-8">

      <Link
        href="https://github.com/Chukwuemeka-Peter-Eze"
        target="_blank"
        className="text-2xl hover:text-cyan-500 transition"
      >
        <FaGithub />
      </Link>

      <Link
        href="https://www.linkedin.com/in/chukwuemekapetereze/"
        target="_blank"
        className="text-2xl hover:text-cyan-500 transition"
      >
        <FaLinkedin />
      </Link>

      <Link
        href="https://medium.com/@ChukwuemekaPeterEze"
        target="_blank"
        className="text-2xl hover:text-cyan-500 transition"
      >
        <FaMedium />
      </Link>

    </div>
  );
}