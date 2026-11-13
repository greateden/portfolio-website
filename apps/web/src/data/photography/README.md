# The photographic collection

This folder controls the photographs in the **randomised homepage hero**, the **scrollable photo rail** and the **Photography gallery**.

Edit `collection.ts` to add, remove or reorder images. Each entry needs:
- `id`: the Flickr photo ID
- `src`: the full Flickr image CDN URL or a locally hosted path such as `/photography/frame.webp`
- `caption`: a short label

The code constructs the original Flickr page URL using the ID. The image URL is the explicit `src` field. Use photographs from **Eden's Flickr account** only. Never invent image filenames or assume an image is still available. Test the direct image URL first.

The hero picks a different random image on every full page load when there are at least two photos. It also offers previous/next buttons and horizontal touch gestures. The same collection populates an accessible horizontal gallery.

Flickr's direct image URLs are not permanent. For a durable public site, export your own photographs into `apps/web/public/photography/` and use paths like `/photography/example.webp` in `collection.ts`. Keep `href` as the attribution link to Flickr. No API key or runtime request to the Flickr API is needed.
