import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, header, footer }) {
  return (
    <>
      <Header data={header} />
      <main id="main-content" tabIndex={-1}>
        {children}
      </main>
      <Footer data={footer} />
    </>
  );
}
