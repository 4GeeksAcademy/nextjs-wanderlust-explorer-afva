"use client";

import { ExperienceCard } from "@/components/experience-card";
import { FilterBar } from "@/components/filter-bar";
import { SearchBar } from "@/components/search-bar";
import { useExperiences } from "@/hooks/use-experiences";
import { useFavorites } from "@/hooks/use-favorites";
import { experiences as allExperiences } from "@/data/experiences";

const destinations = Array.from(
  new Set(allExperiences.map((experience) => experience.destination)),
).sort((first, second) => first.localeCompare(second));

export function ExperienceExplorer() {
  const {
    category,
    destination,
    experiences,
    search,
    updateFilter,
  } = useExperiences();
  const { favoriteIds, toggleFavorite } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-950">
          Explore experiences
        </h1>
        <p className="mt-2 text-slate-600">
          Find an experience by title, category, city, or country.
        </p>
      </header>

      <section
        aria-label="Search and filters"
        className="mb-8 grid gap-4 rounded-md border border-slate-200 bg-slate-50 p-4 md:grid-cols-3"
      >
        <SearchBar
          value={search}
          onChange={(value) => updateFilter("search", value)}
        />
        <div className="md:col-span-2">
          <FilterBar
            category={category}
            destination={destination}
            destinations={destinations}
            onCategoryChange={(value) => updateFilter("category", value)}
            onDestinationChange={(value) => updateFilter("destination", value)}
          />
        </div>
      </section>

      {experiences.length > 0 ? (
        <section
          aria-label="Experience results"
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={favoriteIds.includes(experience.id)}
              onToggleFavorite={() => toggleFavorite(experience.id)}
            />
          ))}
        </section>
      ) : (
        <p className="rounded-md border border-slate-200 bg-white p-6 text-center text-slate-700">
          No se encontraron resultados
        </p>
      )}
    </main>
  );
}