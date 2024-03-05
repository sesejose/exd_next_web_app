// 'use client';


export default async function Posts() {

    const response = await fetch('https://exd.dk/wp-json/wp/v2/posts');
    const articles = await response.json();
    console.log("articles");

    const searchParams = useSearchParams();
  const id = searchParams.get("id");

    const res = await fetch('https://exd.dk/wp-json/wp/v2/posts') + id + "?_embed";
    const article = await res.json();
    const articleSelected = await res.json(); // After getting the data convert it to json.
    console.log("article");
   
    return ({ articles}, {articleSelected })
  }