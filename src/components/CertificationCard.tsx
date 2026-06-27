type Certification = {
  title: string;
  provider: string;
  status: string;
  expected: string;
  description: string;
};

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-500 text-black";

    case "In Progress":
      return "bg-yellow-400 text-black";

    case "Planned":
      return "bg-blue-500 text-white";

    default:
      return "bg-slate-700 text-white";
  }
}

export default function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 transition duration-300 hover:border-cyan-400 hover:-translate-y-1">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <h3 className="text-2xl font-bold">
          {certification.title}
        </h3>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusColor(
            certification.status
          )}`}
        >
          {certification.status}
        </span>

      </div>

      <p className="mt-3 text-cyan-400 font-medium">
        {certification.provider}
      </p>

      <p className="mt-6 leading-7 text-slate-300">
        {certification.description}
      </p>

      <div className="mt-8 border-t border-slate-700 pt-4">

        <p className="text-sm text-slate-400">
          📅 {certification.expected}
        </p>

      </div>

    </div>
  );
}