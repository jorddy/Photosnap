const client = require("../utils/prismic");
const prismic = require("@prismicio/client");

module.exports = async () => {
  const { results } = await client.query(
    prismic.predicates.at("document.type", "story")
  );

  // const { results } = await client.query([
  //   prismic.predicates.at("document.type", "story"),
  //   prismic.predicates.at("my.story.author", "YFezshAAACQAuu1P"),
  // ]);

  return results;
};
