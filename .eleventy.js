module.exports = function(eleventyConfig) {
  // --- Passthrough Copies ---
  // These are files that Eleventy will copy directly to your output folder (_site).
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy({ "src/img": "img" });

  // --- Collections ---
  // We are now manually telling Eleventy how to build our collections.
  // This is more explicit and can solve issues where the automatic
  // collection generation fails.

  // 1. Create a 'characters' collection
  eleventyConfig.addCollection("characters", function(collectionApi) {
    // getFilteredByGlob tells Eleventy to find all Markdown files
    // in the 'src/characters' folder.
    return collectionApi.getFilteredByGlob("./src/characters/**/*.md");
  });

  // 2. Create a 'players' collection
  eleventyConfig.addCollection("players", function(collectionApi) {
    return collectionApi.getFilteredByGlob("./src/players/**/*.md");
  });

  // 3. Create an 'items' collection
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
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};

