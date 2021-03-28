require("dotenv").config();
const Image = require("@11ty/eleventy-img");
const htmlMinify = require("html-minifier");
const { RichText } = require("prismic-dom");

module.exports = function (config) {
  config.addPassthroughCopy({ static: "/", "src/js": "/js" });
  config.addWatchTarget("src/js");
  config.addWatchTarget("src/sass");
  config.setQuietMode(true);
  config.setDataDeepMerge(true);

  config.addFilter("prismicHTML", (content) => {
    return RichText.asHtml(content);
  });

  config.addAsyncShortcode("image", async (src, alt, sizes) => {
    let metadata = await Image(src, {
      widths: [300, 600, 1200, 1600],
      formats: ["webp", "jpeg"],
      urlPath: "/images/",
      outputDir: "./dist/images/",
    });

    return Image.generateHTML(metadata, {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
    });
  });

  config.addTransform("htmlmin", (content, outputPath) => {
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

  return {
    passthroughFileCopy: true,
    htmlTemplateEngine: "11ty.js",
    markdownTemplateEngine: "11ty.js",

    dir: {
      input: "src/layouts",
      output: "dist",
      includes: "../components",
      layouts: "layouts",
      data: "../data",
    },
  };
};
