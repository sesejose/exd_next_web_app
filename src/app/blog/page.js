import Article from "../components/Article";
import { reqUrl } from "@/app/config";
import InsightsHero from "../components/InsightsHero";

// I fetch the articles and pass the them as props to and through the Article component tag 

export default async function Insights() {

  const response = await fetch('https://https://exdinsights.wordpress.com/wp-json/wp/v2/posts'); // /posts?_fields=id,%20title,excerpt,date,content,slug
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


