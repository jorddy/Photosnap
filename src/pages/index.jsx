import SEO from "components/Seo";
import Layout from "components/Layout";
import Image from "components/Image";
import { client } from "lib/prismic";
import Prismic from "@prismicio/client";

export default function Home({ global }) {
  return (
    <Layout data={global}>
      <SEO data={global} />
      <h1>Content</h1>
      <Image metadata={global.site_social_image} />
    </Layout>
  );
}

export async function getStaticProps() {
  const settings = await client.query(
    Prismic.predicates.at("document.type", "setting")
  );

  return {
    props: {
      global: settings.results[0].data,
    },
  };
}
