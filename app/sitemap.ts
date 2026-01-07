import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://infinitybox.in";

  const routes = [
    "",
    "/what-we-do",
    "/what-we-do/hygiene-solutions",
    "/what-we-do/packaging-solutions",
    "/what-we-do/commercial-kitchen-solutions",
    "/what-we-do/manpower-solutions",
    "/who-we-serve",
    "/who-we-serve/hospitality",
    "/who-we-serve/corporates",
    "/who-we-serve/healthcare",
    "/who-we-serve/education",
    "/who-we-serve/industrial",
    "/about-us",
    "/about-us/philosophy",
    "/about-us/sustainability",
    "/about-us/leadership",
    "/about-us/careers",
    "/insights/blogs",
    "/insights/case-studies",
    "/insights/industry-updates",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}






