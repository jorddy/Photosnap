import Prismic from "@prismicio/client";

export const client = Prismic.client(process.env.PRISMIC_API, {
  accessToken: process.env.PRISMIC_AUTH,
});
