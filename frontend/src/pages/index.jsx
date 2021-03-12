import SEO from "../components/Seo";
import { client } from "../lib/sanity";
import SanityImage from "../components/SanityImage";

export default function Home({ data }) {
  return (
    <>
      <SEO route="/" />
      <h2>Hello world</h2>
      <SanityImage src={data.image} alt="Test" w={1000} h={600} />
    </>
  );
}

export async function getStaticProps() {
  const query = await client.fetch(`
    *[_type == "config"] {
      "image": mainimage->image
    }
  `);
  const data = await query.json();

  return {
    props: {
      data,
    },
  };
}
