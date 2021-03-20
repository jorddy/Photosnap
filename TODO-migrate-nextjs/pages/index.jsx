// import SEO from "../components/Seo";
import Image from "next/image";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import { client } from "../lib/sanity";

export default function Home({}) {
  return (
    <Layout data={}>
      <SEO route="/" data={} />
      <h2>Hello world</h2>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  };
}
