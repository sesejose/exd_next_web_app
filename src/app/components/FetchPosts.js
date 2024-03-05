// 'use client';

// import { useSearchParams } from "next/navigation";

export default async function posts() {

  // Fetching the posts/articles
  const response = await fetch('https://exd.dk/wp-json/wp/v2/posts');
  const articles = await response.json();
  // console.log({articles});

  // using the hook to pick up th id of the article
  // const searchParams = useSearchParams();
  // const id = searchParams.get("id");
  //Fetching a single article
  // const res = await fetch('https://exd.dk/wp-json/wp/v2/posts') + id + "?_embed";
  //const article = await res.json();
  // const articleSelected = await res.json(); // After getting the data convert it to json.
  // console.log("articleSelected");
 
    // return ({ articles}, {articleSelected }, {id})
    return ({articles})
  }

  // Comments her ...