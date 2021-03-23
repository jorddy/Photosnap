import { client } from "../../lib/prismic";
import Primsic from "@prismicio/client";

export default function Story({ data }) {
  return (
    <div>
      <h1>Hello</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticPaths() {
  const { results } = await client.query(
    Primsic.predicates.at("document.type", "story")
  );

  return {
    paths: results.map(({ uid }) => ({
      params: {
        uid: uid,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { results } = await client.query(
    Primsic.predicates.at("my.story.uid", `${params.uid}`)
  );

  return {
    props: {
      data: results[0].data,
    },
  };
}
