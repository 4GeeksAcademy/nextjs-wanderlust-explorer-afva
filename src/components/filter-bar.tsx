"use client";

import type { ExperienceCategory } from "@/types/experience";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

type FilterBarProps = {
  category: string;
  destination: string;
  destinations: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
};

export function FilterBar({
  category,
  destination,
  destinations,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div>
        <label
          htmlFor="experience-category"
          className="mb-1 block text-sm font-medium text-slate-800"
        >
          Category
        </label>
        <select
          id="experience-category"
          value={categories.find((item) => item.toLowerCase() === category.toLowerCase()) ?? ""}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        >
          <option value="">All categories</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label
          htmlFor="experience-destination"
          className="mb-1 block text-sm font-medium text-slate-800"
        >
          Destination
        </label>
        <input
          id="experience-destination"
          type="search"
          list="experience-destinations"
          value={destination}
          onChange={(event) => onDestinationChange(event.target.value)}
          placeholder="Search by city or country"
          className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 outline-none focus:border-sky-700 focus:ring-2 focus:ring-sky-700/20"
        />
        <datalist id="experience-destinations">
          {destinations.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </div>
    </div>
  );
}