import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function CategoriesBooks() {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const { data: categoriesData } = await supabase
        .from("categories")
        .select("id, name")
        .order("name");

      const { data: booksData } = await supabase
        .from("books")
        .select("id, title, file_url, category_id");

      setCategories(categoriesData || []);
      setBooks(booksData || []);
      setLoading(false);
    }

    loadData();
  }, []);

  return (
    <Layout>
      <h1>Books by Category</h1>

      {loading && <p>Loading…</p>}

      {!loading &&
        categories.map((category) => {
          const categoryBooks = books.filter(
            (book) => book.category_id === category.id
          );

          return (
            <div key={category.id} style={{ marginBottom: "20px" }}>
              <h2>{category.name}</h2>

              {categoryBooks.length === 0 && (
                <p>No books in this category yet.</p>
              )}

              {categoryBooks.length > 0 && (
                <ul>
                  {categoryBooks.map((book) => (
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
            </div>
          );
        })}
    </Layout>
  );
}
