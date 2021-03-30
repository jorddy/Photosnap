const prismic = require("@prismicio/client");

module.exports = prismic.client(process.env.PRISMIC_API, {
  accessToken: process.env.PRISMIC_TOKEN,
});
