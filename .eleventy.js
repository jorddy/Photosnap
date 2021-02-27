const Image = require("@11ty/eleventy-img");
const Sharp = require("sharp");
const htmlMinify = require("html-minifier");
require("dotenv").config();

const optimiseImage = async (src, alt) => {
  if (!alt) {
    throw new Error(`Missing \`alt\` on myImage from: ${src}`);
  }

  let stats = await Image(src, {
    widths: [300, 600, 900, 1200, 1600],
    formats: ["jpeg", "webp"],
    urlPath: "/images/",
    outputDir: "./dist/images/",
  });
  let lowestSrc = stats["jpeg"][0];

  const srcset = Object.keys(stats).reduce(
    (acc, format) => ({
      ...acc,
      [format]: stats[format].reduce((_acc, curr) => `${_acc} ${curr.srcset} ,`, ""),
    }),
    {}
  );

  const placeholder = await Sharp(lowestSrc.outputPath).resize({ fit: Sharp.fit.inside }).blur().toBuffer();
  const base64Placeholder = `data:image/png;base64,${placeholder.toString("base64")}`;
  const source = `<source type="image/webp" data-srcset="${srcset["webp"]}" >`;

  const img = `<img
      class="lazy"
      alt="${alt}"
      src="${base64Placeholder}"
      data-src="${lowestSrc.url}"
      data-sizes='(min-width: 1024px) 1024px, 100vw'
      data-srcset="${srcset["jpeg"]}"
      width="${lowestSrc.width}"
      height="${lowestSrc.height}">`;

  return `<picture>${source}${img}</picture>`;
};

module.exports = (config) => {
  config.addPassthroughCopy({ "src/assets/meta": "/meta" });
  config.addWatchTarget("src/assets");
  config.setQuietMode(true);
  config.setDataDeepMerge(true);

  config.addAsyncShortcode("image", optimiseImage);
  config.addTransform("htmlMinify", (content, outputPath) => {
    if (outputPath.endsWith(".html")) {
      let minified = htmlMinify.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  // Example filter for turning Sanity Rich Text Blocks to HTML
  // E.g. {% content | sanityHTML %}
  config.addFilter("sanityHTML", (content) => {
    blockToHtml({
      blocks: content,
    });
  });

  return {
    passthroughFileCopy: true,
    jsDataFileSuffix: ".11ty",
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    dir: {
      input: "src/templates",
      includes: "includes",
      layouts: "layouts",
      data: "../data",
      output: "dist",
    },
  };
};
