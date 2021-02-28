import Layout from "../components/Layout";
import "../sass/main.scss";
import "@fontsource/dm-sans";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
