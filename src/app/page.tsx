import { Suspense, ViewTransition } from "react";
import { GalleryContent } from "@/components/gallery-content";
import { GalleryControls } from "@/components/gallery-controls";
import type { SortKey } from "@/lib/photos";

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; sort?: string }>;
}) {
  const { q = "", sort = "title" } = await searchParams;

  return (
    <ViewTransition
      enter={{
        "nav-forward": "fade-in",
        "nav-back": "fade-in",
        default: "none",
      }}
      exit={{
        "nav-forward": "nav-forward",
        "nav-back": "nav-back",
        default: "none",
      }}
      default="none"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <GalleryControls />

        <Suspense
          fallback={
            <ViewTransition exit="slide-down" default="none">
              <GalleryGridSkeleton />
            </ViewTransition>
          }
        >
          <ViewTransition enter="slide-up" default="none">
            <GalleryContent q={q} sort={sort as SortKey} />
          </ViewTransition>
        </Suspense>
      </div>
    </ViewTransition>
  );
}

function GalleryGridSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/5 rounded-lg"
            style={{ aspectRatio: "4/3" }}
          />
        ))}
      </div>
    </div>
  );
}
