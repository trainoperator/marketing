module.exports = function(eleventyConfig) {
  // Copy assets (images, CSS) straight through
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/assets/styles");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
