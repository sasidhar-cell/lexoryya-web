import Layout from "../components/Layout";

export default function Books() {
  return (
    <Layout>
      <h1>Books</h1>

      <ul>
        <li>
          <a
            href="https://ermjlzaghkkqjyomhuny.supabase.co/storage/v1/object/sign/books/cancer-1.pdf?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNDY5MWJlOS0xN2I5LTRmNWMtYWY5Ni1hZTE2ODc0NDIzNmIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib29rcy9jYW5jZXItMS5wZGYiLCJpYXQiOjE3NjkyNDk2NDQsImV4cCI6MTgwMDc4NTY0NH0.0awPPF5Xi9HtyTpU4uJVnXa7rek_j6QzoMUVZhFkFv4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sample Book PDF
          </a>
        </li>
      </ul>
    </Layout>
  );
}
