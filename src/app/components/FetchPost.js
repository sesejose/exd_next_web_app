// 'use client';

import { useSearchParams } from "next/navigation";

export default async function post() {


  // using the hook to pick up th id of the article
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  //Fetching a single article
  const res = await fetch('https://exd.dk/wp-json/wp/v2/posts') + id + "?_embed";
  const articleSelected = await res.json(); // After getting the data convert it to json.
  //const article = await res.json();
//   console.log({articleSelected});
 
    return ({articleSelected})
  }

  // Comments her ...