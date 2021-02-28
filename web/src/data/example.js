// Example of fetching data from Sanity if using install groq from npm
const client = require("../lib/sanity");
const groq = require("groq");

export default async () => {
  try {
    const response = await client.fetch(groq`
    *[_type == "story"] {
        _id,
        title,
        slug
    }
    `);

    return response;
  } catch (error) {
    console.log(error);
  }
};
