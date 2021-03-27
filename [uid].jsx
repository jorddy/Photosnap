import Layout from "components/Layout";
import somecomponent from "slices/somecoponent";
import SEO from "components/Seo";
import { client } from "lib/prismic";
import Prismic from "@prismicio/client";

export default function Page({ page, global }) {
  return (
    <Layout data={global.body}>
      <SEO data={global} />
      {page.body.map((slice) => {
        switch (slice.slice_type) {
          case "hero":
            <Component />;
            break;
          case "section":
            <Component2 />;
            break;
          default:
            <h2>No slices found</h2>;
            break;
        }
      })}
    </Layout>
  );
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Prismic.predicates.at("document.type", "page")
  );

  return {
    paths: results.map(({ uid }) => ({
      params: { uid: uid },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const page = await client.query(
    Primsic.predicates.at("my.page.uid", `${params.uid}`)
  );

  const settings = await client.query(
    Prismic.predicates.at("document.type", "setting")
  );

  return {
    props: {
      page: page.results[0].data,
      global: settings.results[0].data,
    },
  };
}
