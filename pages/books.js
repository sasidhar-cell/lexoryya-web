import Layout from "../components/Layout";

export default function Books() {
  return (
    <Layout>
      <h1>Books</h1>

      <ul>
        <li>
          <a
            href="https://ermjlzaghkkqjyomhuny.supabase.co/storage/v1/object/public/books/cancer-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cancer – Sample Book
          </a>
        </li>
      </ul>
    </Layout>
  );
}
