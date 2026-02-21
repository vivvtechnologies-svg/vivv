import { MetadataRoute } from "next";

const siteUrl = "https://vivvsystems.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number }> = [
    { path: "/", priority: 1.0 },
    { path: "/about", priority: 0.8 },
    { path: "/solutions", priority: 0.8 },
    { path: "/solutions/diagnostic-labs", priority: 0.9 },
    { path: "/solutions/supermarkets", priority: 0.9 },
    { path: "/solutions/retailers", priority: 0.9 },
    { path: "/process", priority: 0.7 },
    { path: "/contact", priority: 0.6 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: new Date(),
    priority: route.priority,
  }));
}
