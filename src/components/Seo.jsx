import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

export default function Seo({ title, description, route, socialImage }) {
  const { data } = useQuery(gql`
    query getSiteMetadata {
      allConfigs {
        edges {
          node {
            site_name
            site_description
            site_url {
              ... on _ExternalLink {
                url
              }
            }
            site_social_image
          }
        }
      }
    }
  `);
  const metadata = data.allConfigs.edges[0].node;

  return (
    <Head>
      <title>{`${
        title ? title + "|" + metadata.site_name : metadata.site_name
      }`}</title>
      <link rel="canonical" href={`${metadata.site_url}${route || ""}`} />
      <meta property="og:site_name" content={metadata.site_name} />
      <meta property="og:title" content={title || metadata.site_name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${metadata.site_url}${route || ""}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={socialImage || metadata.site_social_image}
      />
      <meta
        name="twitter:image"
        content={socialImage || metadata.site_social_image}
      />
      <meta
        property="og:image:alt"
        content={`Page image for ${metadata.site_name}`}
      />
      <meta
        name="twitter:image:alt"
        content={`Page image for ${metadata.site_name}`}
      />
      <meta
        name="description"
        content={description || metadata.site_description}
      />
      <meta
        name="twitter:description"
        content={description || metadata.site_description}
      />
      <meta
        property="og:description"
        content={description || metadata.site_description}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
