import { Suspense } from "react";
import { ExperienceExplorer } from "@/components/experience-explorer";

export default function ExperiencesPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-slate-600">Loading experiences...</p>
        </main>
      }
    >
      <ExperienceExplorer />
    </Suspense>
  );
}