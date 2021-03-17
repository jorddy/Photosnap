// import SEO from "../components/Seo";
import Image from "next/image";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import { client } from "../lib/sanity";

export default function Home({ headerData, footerData, seoData }) {
  return (
    <Layout header={headerData} footer={footerData}>
      <SEO route="/" data={seoData} />
      <h2>Hello world</h2>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
