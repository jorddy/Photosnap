export default function Layout({ children }) {
  return (
    <main id="main-content" tabIndex={-1}>
      {children}
    </main>
  );
}
