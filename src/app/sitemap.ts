import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/solutions",
    "/solutions/diagnostic-labs",
    "/solutions/supermarkets",
    "/solutions/retailers",
    "/process",
    "/contact",
    "/contact/thanks",
    "/privacy",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));
}
