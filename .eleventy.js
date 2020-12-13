const { applySharedConfig } = require("@darekkay/11ty");
const markdownIt = require("markdown-it");
const markdown = require("@darekkay/11ty/lib/markdown");

module.exports = function(eleventyConfig) {
  applySharedConfig(eleventyConfig);

  // markdown setup
  const markdownLib = markdownIt({
    html: true,
    highlight: markdown.highlight()
  })
    .use(...markdown.pluginStripH1())
    .use(...markdown.pluginExternalLinks())
    .use(...markdown.pluginHeadlineAnchors());
  eleventyConfig.setLibrary("md", markdownLib);

  // copy assets
  eleventyConfig.addPassthroughCopy({ "node_modules/@darekkay/styles/dist/css/styles.css": "assets/styles.css" });
  eleventyConfig.addPassthroughCopy({ "node_modules/@darekkay/styles/dist/css/fonts": "assets/fonts" });

  return {
    dir: {
      input: "README.md",
      output: "dist",
      includes: "node_modules/@darekkay/11ty/lib/includes"
    }
  };
};
