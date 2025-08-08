// scripts/generate-seo.ts
import fs from "fs";
import path from "path";

// Pages to include in sitemap
const pages = ["/", "/projects", "/about-me"];

// Change to your actual domain
const baseUrl = "https://codewithgem.is-a.dev";

// ===== Generate sitemap.xml =====
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>
`;

fs.writeFileSync(path.resolve("./public/sitemap.xml"), sitemap);
console.log("✅ sitemap.xml generated!");

// ===== Generate robots.txt =====
const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`;

fs.writeFileSync(path.resolve("./public/robots.txt"), robots);
console.log("✅ robots.txt generated!");
