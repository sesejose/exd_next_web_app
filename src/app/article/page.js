// 'use client';

// This Article page needs all the articles again (data json file)
// Uses that data to 
// It also needs the ID and use that ID to define the article selected
// Uses that article selected to define the States 

// import FetchPosts from "../components/FetchPosts";
// import FetchPost from "../components/FetchPost";
// import ArticleOthers from "../components/ArticlesOthers";
// import { useState } from "react";
import Post from "../components/Post"
// import { useSearchParams } from "next/navigation";

// import Image from "next/image";

export default async function ArticlePage({ article }) {

  // const articles = FetchPosts(); // this has the url from the Articles (from return)
  // const articleSelected = FetchPost(); // this has the url of a single Article with ID (from return)
  // console.log({articles});
  // console.log({articleSelected});

  // using the hook to pick up th id of the article
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  //Fetching a single article
  const selected = {article};
  const id = selected.id;
  const res = await fetch('https://exd.dk/wp-json/wp/v2/posts') + {id} + "?_embed";
  const articleSelected = await res.json(); // After getting the data convert it to json.
  //const article = await res.json();
  console.log({articleSelected});
 

  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  // const url = "https://exd.dk/wp-json/wp/v2/posts" + id + "?_embed";
  // Await then execute the code.
  // const res = await fetch(url); // Fetchs the data (await)
  // const articleSelected = await res.json(); // After getting the data convert it to json.
  // const article = JSON.stringify(articleSelected);
  //console.log(id);    

  // Callback the function
  // const articleSelected = {articleSelected}; // The value is the returned variable in the route.js
  // const [title, setTitle] = useState();
  // const [text, setText] = useState();
  // const [img, setImage] = useState();
  // const [date, setDate] = useState();
  // const [creator, setCreator] = useState();
  // const [category, setCategory] = useState();
  // showArticle({articleSelected});

  // function showArticle({articleSelected}) {
    //console.log(articleSelected);
    // setArticleOpen(articleSelected);
    //setTitle(articleSelected["title"].rendered);
    // setText(articleSelected.text);
    // setImage(articleSelected["img"].guid);
    // setDate(articleSelected["img"].post_date);
    // setCreator(articleSelected.creator);
    // setCategory(articleSelected["_embedded"]["wp:term"]["0"]["0"].name);
    // console.log(category);
  // }

  return (
    <>
    <Post key={articleSelected.id} articleSelected={articleSelected} className="post-link"></Post>
      {/* <div id="article-container" className="col-12 grid-center">
        <div className="hero-title-container">
          <h4>{category}</h4>
          <h1>{title}</h1>
          <div className="date-creator-container small bold">
            <div>{creator}</div>
            <div>{date}</div>
          </div>
        </div>
        <div className="hero-img-container">
          <div className="overlay"></div>
          <Image src={img} width="1920" height="1080" alt="Image"></Image>
        </div>
      </div>
      <div className="blog-content">
        <div className="">
          <p className="mtb">{text}</p>
        </div>
      </div>
      <div className="relatered-artikler">
        <h2 className="flex-row-center">Relateret artikler</h2>
        <div className="grid-blog">
          {articles.map((article) => (
            <ArticleOthers key={article.id} article={article}></ArticleOthers>
          ))}
        </div>
      </div> */}
    </>
  );
}

