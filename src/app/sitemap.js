import { featuredCaseStudySlugs } from "@/data/projects";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const base = siteConfig.url;

  const routes = ["", "/projects", "/about", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = featuredCaseStudySlugs.map((slug) => ({
    url: `${base}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...projectRoutes];
}
