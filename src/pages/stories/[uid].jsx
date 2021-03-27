import Layout from "components/Layout";
import SEO from "components/Seo";
import { client } from "lib/prismic";
import Primsic from "@prismicio/client";

export default function Story({ story, global }) {
  return (
    <Layout data={global.body}>
      <SEO data={global} />
      <h1>Hello</h1>
      <pre>{JSON.stringify(story, null, 2)}</pre>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Primsic.predicates.at("document.type", "story")
  );

  return {
    paths: results.map(({ uid }) => ({
      params: { uid: uid },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const story = await client.query(
    Primsic.predicates.at("my.story.uid", `${params.uid}`)
  );

  const settings = await client.query(
    Prismic.predicates.at("document.type", "setting")
  );

  return {
    props: {
      story: story.results[0].data,
      global: settings.results[0].data,
    },
  };
}
