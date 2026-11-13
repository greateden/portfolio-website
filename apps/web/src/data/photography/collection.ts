/** A curated, editable Flickr photo collection for the portfolio.
 * This folder is the single source of truth for the home hero, photo rail and gallery.
 * Each entry must point to an image Eden owns and its original public Flickr page.
 * Avoid the older broken Flickr URLs; see the README before adding images.
 */
export interface PortfolioPhoto {
  id: string;
  src: string;
  href: string;
  alt: string;
  caption: string;
}
const flickrBase = 'https://www.flickr.com/photos/lumierecrafter/';
const cdnBase = 'https://live.staticflickr.com/65535/';
// These four were previously reachable. Flickr may still change CDN URLs.
const entries = [
  { id: '55128255393', file: '55128255393_00b4113dbe_w.jpg', caption: 'Study in light' },
  { id: '55126629450', file: '55126629450_dbdc17d479.jpg', caption: 'A moment held' },
  { id: '53828024999', file: '53828024999_bff97d7a3b.jpg', caption: 'Fiji · 2024' },
  { id: '55126419598', file: '55126419598_805fb6c1f3.jpg', caption: 'From the photographic journal' },
] as const;
export const photos: PortfolioPhoto[] = entries.map(({ id, file, caption }) => ({
  id,
  src: cdnBase + file,
  href: flickrBase + id,
  alt: 'Photograph by Eden Li Yitian',
  caption,
}));
