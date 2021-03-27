import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, data }) {
  return (
    <>
      <Header data={data} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer data={data} />
    </>
  );
}
