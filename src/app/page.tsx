import { Suspense } from "react";
import { GalleryContent } from "@/components/gallery-content";

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Suspense fallback={<GalleryGridSkeleton />}>
        <GalleryContent />
      </Suspense>
    </div>
  );
}

function GalleryGridSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
        <div className="w-full sm:w-64 h-8 bg-white/5 rounded" />
        <div className="flex items-center gap-1">
          <div className="h-7 w-16 bg-white/5 rounded" />
          <div className="h-7 w-12 bg-white/5 rounded" />
          <div className="h-7 w-24 bg-white/5 rounded" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white/5 rounded-lg" style={{ aspectRatio: "4/3" }} />
        ))}
      </div>
    </div>
  );
}
