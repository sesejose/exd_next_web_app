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
// Async was removed
export default function Insights() {
  
  // const response = await fetch(`${reqUrl}`); 
  // const articles = await response.json();
  // console.log(articles);
  
  const initialPostList = 8; // Number of articles to display initially
  const incrementInitialPostList = 4; // Number of articles to add each time the "load more" button is clicked

  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState([]);
  /* Your array of articles goes here */
  
  /* A - Fetching the Array of Articles */
  useEffect(() => {
    fetch('https://exd-insight.dk/wp-json/wp/v2/article?_embed&per_page=100')
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles); 
        // B - Defining the State Articles with the fetched Array
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);  

  // Function triggered by event "L"oad more" 
  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList)
  }
  
  // With Slice we take&return the Array of articles from "0" to initial amount (8) and Map it --> return every item (Article) and complete each item with the data   
  return (
    <>
    <InsightsHero></InsightsHero>
    <div className="wide">
      <section className="grid-blog padding">
        {articles.slice(0, displayPosts).map(article => (
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
          bodyEmailText={article.body_email_text_article.rendered}
          bodyEmail={article.body_email_article.rendered}
          
          ></Article>
        ))}
      </section>
        {/* Load More --> evaluates if displayPosts is lower than articles.length and of yes add a button if not "null" */}
      <section className="grid-center padding">
      <div class="col-12 ptb-large">
          {displayPosts < articles.length ? ( 
            <button onClick={loadMore} className="btn-secondary flex-row-center m-auto">Load more articles</button>
        ) : null}
      </div>
        {/* <div class="col-4-10 ptb-large w-100">
            <button onClick={loadMore} class="btn-secondary flex-row-center">
                <span className="material-symbols-rounded">plus</span>
                <div>Load more articles</div>
            </button>
        </div> */}
      </section>
    </div>
    </>
  );
}


