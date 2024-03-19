'use client'

import Article from "../components/Article";
import { reqUrl } from "@/app/config";
import InsightsHero from "../components/InsightsHero";
import { useState } from "react";
import { useEffect } from "react";

// async function getData() {
//   const res = await fetch('https://exd-insight.dk/wp-json/wp/v2/article?_embed&per_page=100')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }


// I fetch the articles and pass the them as props to and through the Article component tag 
// Asyn was removed
export default function Insights() {
  
  // const response = await fetch(`${reqUrl}`); 
  // const articles = await response.json();
  // console.log(articles);

  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    fetch('https://exd-insight.dk/wp-json/wp/v2/article?_embed&per_page=100')
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  

  // const [id, setId] = useState();
  // const [category, setCategory] = useState();
  // const [image, setImage] = useState();
  // const [title, setTitle] = useState();
  // const [excerpt, setExcrpt] = useState();
  // const [content, setContent] = useState();
  // const [slug, setSlug] = useState();

  return (
    <>
    <InsightsHero></InsightsHero>
    <div className="wide">
      <div className="grid-blog">
        {articles.map(article => (
          <Article 

          key={article.id}
          id={article.id}
          slug={article.slug}
          category={article["_embedded"]["wp:term"]["0"]["0"].name}
          image={article.image_article.rendered}
          title={article.title_article.rendered}
          excerpt={article.excerpt_article.rendered}
          bodyHeadline={article.body_headline_article.rendered}
          bodyImage={article.body_image_article.rendered}
          bodyCaption={article.body_caption_article.rendered}
          bodyText={article.body_text_article.rendered}
          bodyQuote={article.body_quote_article.rendered}
          bodyMoreText={article.body_more_text_article.rendered}
          bodyLinkText={article.body_link_text_article.rendered}
          bodyLink={article.body_link_article.rendered}
          
          ></Article>
        ))}
      </div>
    </div>
    </>
  );
}

