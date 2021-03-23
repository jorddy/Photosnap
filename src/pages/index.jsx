import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Image from "../components/Image";
import { client } from "../lib/prismic";
import Prismic from "@prismicio/client";

export default function Home({ data }) {
  return (
    <Layout data={data.body}>
      <SEO data={data} />
      <h2>Hello world</h2>
      <Image metadata={data.site_social_image} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { results } = await client.query(
    Prismic.predicates.at("document.type", "setting")
  );

  return {
    props: {
      data: results[0].data,
    },
  };
}
