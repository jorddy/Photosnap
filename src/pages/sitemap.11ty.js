module.exports = class {
  data() {
    return {
      permalink: "/sitemap.xml",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    return `<?xml version="1.0" encoding="utf-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${data.collections.all.map(
      (page) => `
    <url>
      <loc>${data.site.url}${page.url}</loc>
        <lastmod>${page.date}</lastmod>
        <changefreq>
        ${page.changeFreq ? page.changeFreq : "monthly"}
        </changefreq>
    </url>
    `
    )}
    </urlset>
    `;
  }
};
