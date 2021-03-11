import Head from "next/head";
import site from "../utils/site";

export default function Seo({ title, description, route, socialImage }) {
  return (
    <Head>
      <title>{`${title ? title + "|" + site.title : site.title}`}</title>
      <link rel="canonical" href={`${site.url}${route || ""}`} />
      <meta property="og:site_name" content={site.title} />
      <meta property="og:title" content={title || site.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${site.url}${route || ""}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={socialImage || site.socialImage} />
      <meta name="twitter:image" content={socialImage || site.socialImage} />
      <meta property="og:image:alt" content={`Page image for ${site.name}`} />
      <meta name="twitter:image:alt" content={`Page image for ${site.name}`} />
      <meta name="description" content={description || site.description} />
      <meta
        name="twitter:description"
        content={description || site.description}
      />
      <meta
        property="og:description"
        content={description || site.description}
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
