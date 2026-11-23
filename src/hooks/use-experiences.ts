"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { experiences } from "@/data/experiences";

type ExperienceFilter = "search" | "category" | "destination";

export function useExperiences() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";
  const category = searchParams.get("category") ?? "";
  const destination = searchParams.get("destination") ?? "";

  let titlePattern: RegExp | null = null;
  try {
    titlePattern = new RegExp(search, "i");
  } catch {
    titlePattern = null;
  }

  const filteredExperiences = experiences.filter((experience) => {
    if (!titlePattern || !titlePattern.test(experience.title)) return false;
    if (
      category &&
      experience.category.toLowerCase() !== category.toLowerCase()
    ) {
      return false;
    }
    if (
      destination &&
      !experience.destination.toLowerCase().includes(destination.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  function updateFilter(filter: ExperienceFilter, value: string) {
    const nextParams = new URLSearchParams(searchParams.toString());
    const normalizedValue = value.trim();

    if (normalizedValue) {
      nextParams.set(filter, normalizedValue);
    } else {
      nextParams.delete(filter);
    }

    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  return {
    category,
    destination,
    experiences: filteredExperiences,
    search,
    updateFilter,
  };
}