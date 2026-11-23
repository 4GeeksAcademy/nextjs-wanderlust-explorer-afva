"use client";

import { ExperienceCard } from "@/components/experience-card";
import { experiences } from "@/data/experiences";
import { useFavorites } from "@/hooks/use-favorites";

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const favoriteExperiences = experiences.filter((experience) =>
    favoriteIds.includes(experience.id),
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-950">Favorites</h1>
        <p className="mt-2 text-slate-600">
          Experiences you have saved during this visit.
        </p>
      </header>

      {favoriteExperiences.length > 0 ? (
        <section
          aria-label="Favorite experiences"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {favoriteExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite
              onToggleFavorite={() => toggleFavorite(experience.id)}
            />
          ))}
        </section>
      ) : (
        <p className="rounded-md border border-slate-200 bg-white p-6 text-center text-slate-700">
          No favorites yet.
        </p>
      )}
    </main>
  );
}