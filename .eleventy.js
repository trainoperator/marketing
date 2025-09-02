module.exports = function(eleventyConfig) {
  // Copy assets (images, CSS) straight through
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});

  // Watch CSS for changes
  eleventyConfig.addWatchTarget("src/assets/styles");

  // Simple Nunjucks date filter without external deps.
  // Supports tokens used in templates: 'MMMM d, yyyy'
  eleventyConfig.addNunjucksFilter("date", function(dateObj, format = "MMMM d, yyyy", locale = "en-US") {
    if (!dateObj) return "";
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    if (isNaN(d)) return "";
    const monthLong = new Intl.DateTimeFormat(locale, { month: 'long' }).format(d);
    const day = new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(d);
    const year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(d);
    // Very small formatter for the single pattern we use
    if (format === 'MMMM d, yyyy') {
      return `${monthLong} ${day}, ${year}`;
    }
    // Fallback ISO
    return d.toISOString();
  });

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
