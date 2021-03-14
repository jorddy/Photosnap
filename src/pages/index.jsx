import SEO from "../components/Seo";
import Image from "next/image";
import { client } from "../lib/apollo";
import { gql } from "@apollo/client";

export default function Home({ data }) {
  return (
    <>
      <SEO route="/" />
      <h2>Hello world</h2>
    </>
  );
}
