import { getPhotos } from "@/data/queries/photos";
import { PhotoGrid } from "@/components/photo-grid";
import type { SortKey } from "@/lib/photos";
import { sortPhotos } from "@/lib/photos";

export async function GalleryContent({
  q,
  sort,
}: {
  q: string;
  sort: SortKey;
}) {
  const photos = await getPhotos();

  const filtered = photos.filter((p) => {
    const query = q.toLowerCase();
    return (
      p.title.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.photographer.toLowerCase().includes(query)
    );
  });

  const sorted = sortPhotos(filtered, sort);

  return <PhotoGrid photos={sorted} q={q} />;
}
