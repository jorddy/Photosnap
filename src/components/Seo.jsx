import Head from "next/head";

export default function Seo({ title, description, route, socialImage, data }) {
  const { site_title, site_description, site_social_image, site_link } = data;

  return (
    <Head>
      <title>{`${title ? `${title}  |  ${site.title}` : site_title}`}</title>
      <link rel="canonical" href={`${site_link.url}${route || ""}`} />
      <meta property="og:site_name" content={site_title} />
      <meta property="og:title" content={title || site_title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site_link.url}${route || ""}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="og:image"
        content={socialImage || site_social_image.url}
      />
      <meta
        name="twitter:image"
        content={socialImage || site_social_image.url}
      />
      <meta property="og:image:alt" content={`Page image for ${site_title}`} />
      <meta name="twitter:image:alt" content={`Page image for ${site_title}`} />
      <meta name="description" content={description || site_description} />
      <meta
        name="twitter:description"
        content={description || site_description}
      />
      <meta
        property="og:description"
        content={description || site_description}
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
