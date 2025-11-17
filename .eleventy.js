// .eleventy.js or eleventy.config.js

// --- Date Utility Functions ---
function getReadableDate(dateObj) {
  // Formats the date to a readable string: e.g., November 17, 2025
  return new Date(dateObj).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function htmlDateString(dateObj) {
  // Formats the date for the HTML datetime attribute: e.g., 2025-11-17
  return new Date(dateObj).toISOString().split('T')[0];
}

module.exports = function(eleventyConfig) {
  
  // --- Passthrough Copies ---
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // --- Nunjucks Filters (Date Formatting) ---
  eleventyConfig.addFilter("readableDate", getReadableDate);
  eleventyConfig.addFilter("htmlDateString", htmlDateString);

  // --- Custom Collections ---
  
  // 1. Campaign Log Collection (Looks in src/blog)
  eleventyConfig.addCollection("campaign", function(collection) {
    return collection.getFilteredByGlob("src/blog/**/*.md");
  });

  // 2. Characters Collection (Looks in src/characters)
  eleventyConfig.addCollection("characters", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/characters/**/*.md");
  });

  // 3. Players Collection (Looks in src/players)
  eleventyConfig.addCollection("players", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/players/**/*.md");
  });

  // 4. Items Collection (Looks in src/items)
  eleventyConfig.addCollection("items", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/items/**/*.md");
  });


  // --- Eleventy Configuration ---
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};