import Sanity from "@sanity/client";

export const client = Sanity({
  projectId: process.env.SANITY_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});
