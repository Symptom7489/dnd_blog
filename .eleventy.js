module.exports = function(eleventyConfig) {
  // Passthrough copy for your CSS folder
  eleventyConfig.addPassthroughCopy("css");

  // Passthrough copy for an images folder, if you have one
  // eleventyConfig.addPassthroughCopy("img");

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site", // This is the crucial line!
    },
  };
};
