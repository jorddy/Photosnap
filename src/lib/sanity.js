// Example sanity client connect if using install @sanity/client through npm
const sanityClient = require("@sanity/client");

module.exports = sanityClient({
  projectId: "44qovjg9",
  dataset: "production",
  useCdn: true,
});
