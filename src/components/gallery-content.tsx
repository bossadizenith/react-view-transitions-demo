import { getPhotos } from "@/data/queries/photos";
import { PhotoGrid } from "@/components/photo-grid";

export async function GalleryContent() {
  const photos = await getPhotos();
  return <PhotoGrid photos={photos} />;
}
