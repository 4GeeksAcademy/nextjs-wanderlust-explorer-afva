"use client";

import { useEffect } from "react";

type ExperienceDocumentTitleProps = {
  title: string;
};

export function ExperienceDocumentTitle({
  title,
}: ExperienceDocumentTitleProps) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
}