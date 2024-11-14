import { useLoaderData, useNavigate } from "react-router-dom";
import { ArticleType } from "../lib/definitions";

function DetailsPage() {
  const article: ArticleType = useLoaderData() as ArticleType;

  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <>
      <h1 className="text-4xl text-center my-12">{article.name}</h1>

      <section className="flex gap-12 justify-center">
        <img src={article.picture_resized} alt={`image de ${article.name}`} />
        <div className="flex flex-col gap-12">
          <p>{article.description}</p>
          <button
            onClick={handleClick}
            className="text-white bg-slate-800 p-4 w-fit"
          >
            Retour
          </button>
        </div>
      </section>
    </>
  );
}

export default DetailsPage;
