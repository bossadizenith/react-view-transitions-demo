import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CollectionGrid } from "./collection-grid";

const COLLECTION_SLUGS = ["landscapes", "urban", "street"];

export async function generateStaticParams() {
  return COLLECTION_SLUGS.map((slug) => ({ slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!COLLECTION_SLUGS.includes(slug)) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-white/40 hover:text-white transition-colors mb-8"
      >
        ← Gallery
      </Link>

      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-white capitalize mb-1">
          {slug}
        </h1>
      </div>

      <div className="flex items-center gap-2 mb-10 border-b border-white/10 pb-6">
        {COLLECTION_SLUGS.map((s) => (
          <Link
            key={s}
            href={`/collection/${s}`}
            className={`px-3 py-1.5 rounded font-mono text-xs transition-colors capitalize ${
              s === slug
                ? "bg-white/10 text-white border border-white/20"
                : "text-white/40 hover:text-white"
            }`}
          >
            {s}
          </Link>
        ))}
      </div>

      <Suspense fallback={<CollectionGridSkeleton />}>
        <CollectionGrid slug={slug} />
      </Suspense>
    </div>
  );
}

function CollectionGridSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-4 w-20 bg-white/5 rounded -mt-6 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white/5 rounded-lg" style={{ aspectRatio: "4/3" }} />
        ))}
      </div>
    </div>
  );
}
