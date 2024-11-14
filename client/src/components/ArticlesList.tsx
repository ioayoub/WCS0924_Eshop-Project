import { ArticleType } from "../lib/definitions";
import ArticlesCard from "./ArticlesCard";

export default function ArticlesList({
  articles,
  currentCategory,
}: {
  articles: ArticleType[];
  currentCategory: string;
}) {
  return (
    <>
      <section className="flex justify-center flex-wrap gap-8 my-12">
        {articles &&
          articles
            .filter((a) => a.category.includes(currentCategory))

            .map((a: ArticleType) => <ArticlesCard article={a} key={a.id} />)}
      </section>
    </>
  );
}
