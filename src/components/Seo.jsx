import Head from "next/head";
import { gql, useQuery } from "@apollo/client";

export default function Seo({ title, description, route, socialImage }) {
  const { loading, error, data } = useQuery(gql`
    query getSiteMetadata {
      allConfigs {
        edges {
          node {
            site_name
            site_description
            site_social_image
            site_url {
              ... on _ExternalLink {
                url
              }
            }
          }
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const {
    site_name,
    site_description,
    site_social_image,
    site_url,
  } = data.allConfigs.edges[0].node;

  return (
    <Head>
      <title>{`${title ? title + "|" + site_name : site_name}`}</title>
      <link rel="canonical" href={`${site_url.url}${route || ""}`} />
      <meta property="og:site_name" content={site_name} />
      <meta property="og:title" content={title || site_name} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site_url.url}${route || ""}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={socialImage || site_social_image.url}
      />
      <meta
        name="twitter:image"
        content={socialImage || site_social_image.url}
      />
      <meta property="og:image:alt" content={`Page image for ${site_name}`} />
      <meta name="twitter:image:alt" content={`Page image for ${site_name}`} />
      <meta
        name="description"
        content={description || site_description[0].text}
      />
      <meta
        name="twitter:description"
        content={description || site_description[0].text}
      />
      <meta
        property="og:description"
        content={description || site_description[0].text}
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
