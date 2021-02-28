import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "44qovjg9",
  dataset: "production",
  useCdn: true,
});
