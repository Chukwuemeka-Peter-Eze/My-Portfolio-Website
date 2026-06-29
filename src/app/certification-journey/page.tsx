import Navbar from "@/components/Navbar";
import CertificationJourney from "@/sections/CertificationJourney";

export default function CertificationJourneyPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar />
      <CertificationJourney />
    </main>
  );
}