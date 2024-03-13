import Article from "../components/Article";
import { reqUrl } from "@/app/config";
import InsightsHero from "../components/InsightsHero";

// I fetch the articles and pass the them as props to and through the Article component tag 

export default async function Insights() {

  const response = await fetch(`${reqUrl}`); // /posts?_fields=id,%20title,excerpt,date,content,slug
  const articles = await response.json();
  console.log(articles);

  return (
    <>
    <InsightsHero></InsightsHero>
      <div className="grid-blog">
        {articles.map((article) => (
          <Article key={article.id} article={article}></Article>
        ))}
      </div>
    </>
  );
}


