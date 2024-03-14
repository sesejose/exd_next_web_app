// 'use client'

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
        {articles.map(article => (
          <Article 

          key={article.id}
          id={article.id}
          category={article["_embedded"]["wp:term"]["0"]["0"].name}
          image={article.image_article.rendered}
          title={article.title_article.rendered}
          excerpt={article.excerpt_article.rendered}
          content={article.content_article.rendered}
          slug={article.slug}
          
          ></Article>
        ))}
      </div>
    </>
  );
}

