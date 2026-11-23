"use client";

import { useFavorites } from "@/hooks/use-favorites";

export default function ProfilePage() {
  const { favoriteIds } = useFavorites();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="mb-6 text-3xl font-semibold text-slate-950">Profile</h1>
      <section
        aria-label="User profile"
        className="flex flex-col gap-6 rounded-md border border-slate-200 bg-white p-6 sm:flex-row sm:items-center"
      >
        <div
          aria-hidden="true"
          className="grid size-16 shrink-0 place-items-center rounded-full bg-sky-100 text-lg font-semibold text-sky-900"
        >
          AM
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-semibold text-slate-950">Alex Morgan</h2>
          <p className="mt-1 text-sm text-slate-600">Wanderlust Explorer</p>
        </div>
        <div className="border-t border-slate-200 pt-4 text-left sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
          <p className="text-sm text-slate-600">Saved favorites</p>
          <p className="mt-1 text-2xl font-semibold text-slate-950">
            {favoriteIds.length}
          </p>
        </div>
      </section>
    </main>
  );
}