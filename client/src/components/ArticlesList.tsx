import { useEffect, useState } from "react";
import { ArticleType } from "../lib/definitions";
import ArticlesCard from "./ArticlesCard";

export default function ArticlesList() {
  // Récupérer la liste complète des articles et de les afficher
  const API_URL = import.meta.env.VITE_API_ESHOP;

  const [articles, setArticles] = useState<ArticleType[] | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error(error));
  }, []);

  console.log(articles);

  return (
    <>
      <section className="flex justify-center flex-wrap gap-8 my-12">
        {articles &&
          articles.map((a: ArticleType) => (
            <ArticlesCard article={a} key={a.id} />
          ))}
      </section>
    </>
  );
}
