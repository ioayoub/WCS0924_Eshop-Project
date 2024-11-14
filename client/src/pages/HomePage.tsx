import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ArticlesFilters from "../components/ArticlesFilters";
import ArticlesList from "../components/ArticlesList";
import { ArticleType } from "../lib/definitions";

function HomePage() {
  const articles: ArticleType[] = useLoaderData() as ArticleType[];

  const [currentCategory, setCurrentCategory] = useState<string>("");
  console.log(currentCategory);

  const categories: string[] = [...new Set(articles.map((a) => a.category))];

  return (
    <>
      <h1 className="text-4xl text-center my-12">Homepage</h1>
      <ArticlesFilters
        categories={categories}
        setCurrentCategory={setCurrentCategory}
      />
      <ArticlesList articles={articles} currentCategory={currentCategory} />
    </>
  );
}

export default HomePage;
