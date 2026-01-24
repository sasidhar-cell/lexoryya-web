import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const { data, error } = await supabase
  .from("categories")
  .select("*");

console.log("Supabase categories data:", data);
console.log("Supabase categories error:", error);

      if (!error) {
        setCategories(data || []);
      }
      setLoading(false);
    }

    loadCategories();
  }, []);

  return (
    <Layout>
      <h1>Categories</h1>

      {loading && <p>Loading categories…</p>}

      {!loading && (
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
}
