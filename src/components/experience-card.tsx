import Link from "next/link";
import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200 bg-white">
      <div className="relative">
        <Link
          href={`/experiences/${encodeURIComponent(experience.id)}`}
          aria-label={`View ${experience.title}`}
          className="block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
        >
        <div
          role="img"
          aria-label={experience.title}
          className="aspect-[4/3] bg-cover bg-center"
          style={{ backgroundImage: `url("${experience.imageUrl}")` }}
        />
        </Link>
        <button
          type="button"
          aria-label={`${isFavorite ? "Remove" : "Add"} ${experience.title} ${isFavorite ? "from" : "to"} favorites`}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
          className="absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-slate-200 bg-white/95 text-2xl leading-none text-rose-700 shadow-sm hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700"
        >
          <span aria-hidden="true">{isFavorite ? "♥" : "♡"}</span>
        </button>
      </div>
      <Link
        href={`/experiences/${encodeURIComponent(experience.id)}`}
        className="block space-y-2 p-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-700"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="font-semibold text-slate-950">{experience.title}</h2>
          <span className="shrink-0 text-sm text-slate-700">
            {experience.rating.toFixed(1)} / 5
          </span>
        </div>
        <p className="text-sm text-slate-600">
          {experience.destination} · {experience.category}
        </p>
        <p className="text-sm font-medium text-slate-900">
          {experience.price} per person
        </p>
      </Link>
    </article>
  );
}