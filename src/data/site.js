const client = require("../utils/prismic");
const prismic = require("@prismicio/client");

module.exports = async () => {
  const { results } = await client.query(
    prismic.predicates.at("document.type", "setting")
  );

  return results[0].data;
};
