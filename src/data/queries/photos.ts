import { cacheTag, cacheLife } from "next/cache";
import { notFound } from "next/navigation";
import { cache } from "react";
import { photos, type Photo } from "@/lib/photos";

const SIMULATED_DELAY_MS = 800;

async function cachedPhotos(): Promise<Photo[]> {
  "use cache";
  cacheTag("photos");
  cacheLife("default");
  return photos;
}

export const getPhotos = cache(async (): Promise<Photo[]> => {
  return cachedPhotos();
});

async function cachedPhotoById(id: string): Promise<Photo | null> {
  "use cache";
  cacheTag("photos", `photo-${id}`);
  cacheLife("default");
  return photos.find((p) => p.id === id) ?? null;
}

export const getPhoto = cache(async (id: string): Promise<Photo> => {
  const photo = await cachedPhotoById(id);
  if (!photo) notFound();
  return photo;
});

async function cachedPhotoByIdAsync(id: string): Promise<Photo | null> {
  "use cache";
  cacheTag("photos", `photo-${id}`);
  cacheLife("default");
  await new Promise((resolve) => setTimeout(resolve, SIMULATED_DELAY_MS));
  return photos.find((p) => p.id === id) ?? null;
}

export const getPhotoAsync = cache(async (id: string): Promise<Photo> => {
  const photo = await cachedPhotoByIdAsync(id);
  if (!photo) notFound();
  return photo;
});

async function cachedCollection(slug: string): Promise<Photo[]> {
  "use cache";
  cacheTag("photos", `collection-${slug}`);
  cacheLife("default");
  return photos.filter((p) => p.collection === slug);
}

export const getCollection = cache(async (slug: string): Promise<Photo[]> => {
  return cachedCollection(slug);
});
