import SEO from "../components/Seo";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";
import Image from "next/image";

export default function Home({ data }) {
  return (
    <>
      <SEO route="/" />
      <h2>Hello world</h2>
      <Image
        src={data.site_social_image.url}
        alt={data.site_social_image.alt}
        width={1000}
        height={600}
      />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getConfig {
        allConfigs {
          edges {
            node {
              site_social_image
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      data: data.allConfigs.edges[0].node,
    },
  };
}
