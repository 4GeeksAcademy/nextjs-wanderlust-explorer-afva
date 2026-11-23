"use client";

import { useContext } from "react";
import { FavoritesContext } from "@/components/favorites-provider";

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }

  return context;
}