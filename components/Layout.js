export default function Layout({ children }) {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <h2>Lexoryya</h2>
        <nav>
          <a href="/">Home</a> |{" "}
          <a href="/books">Books</a> |{" "}
          <a href="/categories">Categories</a> |{" "}
          <a href="/pricing">Pricing</a>
        </nav>
      </header>

      <main style={{ padding: "2rem" }}>
        {children}
      </main>

      <footer style={{ padding: "1rem", borderTop: "1px solid #ccc" }}>
        <p>© Lexoryya — Knowledge Without Borders</p>
      </footer>
    </>
  );
}
