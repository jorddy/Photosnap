// import SEO from "../components/Seo";
import Image from "next/image";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import { client } from "../lib/prismic";
import Prismic from "@prismicio/client";

export default function Home({ headerData, footerData, seoData }) {
  return (
    <Layout header={headerData} footer={footerData}>
      <SEO route="/" data={seoData} />
      <h2>Hello world</h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const headerData = await client.query(
    Prismic.predicates.at("document.type", "settings")
  );
  const footerData = await client.query(
    Prismic.predicates.at("document.type", "footer")
  );
  const configData = await client.query(
    Prismic.predicates.at("document.type", "config")
  );

  return {
    props: {
      headerData: headerData.results[0].data,
      footerData: footerData.results[0].data,
      seoData: configData.results[0].data,
    },
  };
}
