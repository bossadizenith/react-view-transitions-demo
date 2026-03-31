import { Suspense } from "react";
import { PhotographerList } from "./photographer-list";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-white mb-4">
          About
        </h1>
        <p className="text-base text-white/50 leading-relaxed">
          Frames is a curated photography gallery exploring light, place, and
          time.
        </p>
      </div>

      <section className="border-t border-white/10 pt-12">
        <h2 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-8">
          Photographers
        </h2>
        <Suspense fallback={<PhotographerListSkeleton />}>
          <PhotographerList />
        </Suspense>
      </section>
    </div>
  );
}

function PhotographerListSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-white/5" />
          <div className="flex-1 space-y-2">
            <div className="h-4 w-28 bg-white/5 rounded" />
            <div className="h-3 w-36 bg-white/5 rounded" />
          </div>
          <div className="h-3 w-16 bg-white/5 rounded" />
        </div>
      ))}
    </div>
  );
}
