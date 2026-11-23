import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceDocumentTitle } from "@/components/experience-document-title";
import { experiences } from "@/data/experiences";

type ExperienceRouteProps = {
  params: Promise<{ id: string }>;
};

function findExperience(id: string) {
  return experiences.find((experience) => experience.id === id);
}

export function generateStaticParams() {
  return experiences.map(({ id }) => ({ id }));
}

export async function generateMetadata({
  params,
}: ExperienceRouteProps): Promise<Metadata> {
  const { id } = await params;
  const experience = findExperience(id);

  return experience
    ? { description: experience.description }
    : { title: "Experience not found" };
}

export default function ExperienceDetailPage({
  params,
}: ExperienceRouteProps) {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-slate-600">Loading experience...</p>
        </main>
      }
    >
      <ExperienceDetailContent params={params} />
    </Suspense>
  );
}

async function ExperienceDetailContent({
  params,
}: ExperienceRouteProps) {
  const { id } = await params;
  const experience = findExperience(id);

  if (!experience) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <ExperienceDocumentTitle title={experience.title} />
      <Link
        href="/experiences"
        className="text-sm font-medium text-sky-800 underline-offset-4 hover:underline"
      >
        Back to experiences
      </Link>
      <article className="mt-6 overflow-hidden rounded-md border border-slate-200 bg-white">
        <div
          role="img"
          aria-label={experience.title}
          className="aspect-[16/9] bg-cover bg-center"
          style={{ backgroundImage: `url("${experience.imageUrl}")` }}
        />
        <div className="grid gap-6 p-5 sm:p-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm font-medium text-sky-800">
              {experience.category}
            </p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950">
              {experience.title}
            </h1>
            <p className="mt-2 text-slate-600">{experience.destination}</p>
            <p className="mt-6 leading-7 text-slate-700">
              {experience.description}
            </p>
          </div>
          <div className="flex gap-6 border-t border-slate-200 pt-4 text-sm md:flex-col md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <p>
              <span className="block text-slate-500">Price per person</span>
              <span className="mt-1 block font-semibold text-slate-950">
                {experience.price}
              </span>
            </p>
            <p>
              <span className="block text-slate-500">Rating</span>
              <span className="mt-1 block font-semibold text-slate-950">
                {experience.rating.toFixed(1)} / 5
              </span>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}