export function getImage(imageName: string) {
  const img = new URL(
    `/src/assets/ApplicationLogos/${imageName}`,
    import.meta.url
  ).href;

  // Add fallback Application Logo

  return img;
}
