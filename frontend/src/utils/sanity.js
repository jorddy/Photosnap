import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});
