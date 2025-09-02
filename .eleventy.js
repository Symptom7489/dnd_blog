// .eleventy.js
module.exports = function (eleventyConfig) {
  // Pass through directories like CSS and images
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("img");

  // Add more configurations as needed
  return {
    dir: {
      input: "src", // Source directory for your content
      output: "dist", // Output directory for the generated site
    },
  };
};
