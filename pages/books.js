import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBooks() {
      const { data, error } = await supabase
        .from("books")
        .select("id, title, file_url")
        .order("created_at", { ascending: false });

      if (!error) {
        setBooks(data || []);
      }
      setLoading(false);
    }

    loadBooks();
  }, []);

  return (
    <Layout>
      <h1>Books</h1>

      {loading && <p>Loading books…</p>}

      {!loading && books.length === 0 && (
        <p>No books available yet.</p>
      )}

      {!loading && books.length > 0 && (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <a
                href={book.file_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {book.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
