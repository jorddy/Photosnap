import Layout from "../components/Layout";
import "@fontsource/dm-sans";
import "../sass/main.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
