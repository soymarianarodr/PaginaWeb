/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Los placeholders actuales son SVG locales; al reemplazarlos por
    // fotografías reales (jpg/png/webp) esto puede eliminarse.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
