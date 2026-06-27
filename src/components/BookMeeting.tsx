import Link from "next/link";

export default function BookMeeting() {
  return (
    <Link
      href="https://calendly.com/YOUR_USERNAME"
      target="_blank"
      className="inline-flex items-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
    >
      📅 Book a Meeting
    </Link>
  );
}