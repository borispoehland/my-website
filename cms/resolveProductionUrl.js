const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;
const previewBaseUrl = process.env.SANITY_STUDIO_PREVIEW_URL;

export default function resolveProductionUrl(document) {
  if (!document?.slug?.current) return previewBaseUrl;
  return `${previewBaseUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}
