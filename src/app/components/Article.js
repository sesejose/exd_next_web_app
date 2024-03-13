// 'use client';

import Image from "next/image";
import Link from "next/link";
import { catUrl } from "../../app/config.js"

// This component receives the props {article} from the blog/page.js
// Uses that props to set up the card for each article in the list
// Each card links to the article [slug]
// It will open the article --> page.js inside the [slug]
// And pass the params through the URL / href / Link tag to the slug/page.js

export default async function Article({ article }) {


  const response = await fetch(`${catUrl}` + article.categories[0]); // /posts?_fields=id,%20title,excerpt,date,content,slug
  const artCat = await response.json();
  console.log(artCat);

  return (
    <>
      
      <Link href={`/blog/${article.slug}`} key={article.id} article={article} category={artCat.name} className="post-link">
        <div className="post">
          <div className="post-img-container">
            {/* <Image src={article["_embedded"]["wp:featuredmedia"]["0"].link} width={160} height={90} alt="Image"></Image> */}
            <Image src={article.image_article} width={160} height={90} alt="Image"></Image>
          </div>
          <div className="post-description">
            {/* <p className="post-category">{article["_embedded"]["wp:term"]["0"]["0"].name}</p> */}
          {/* <p className="post-category">{allCat.map((cat) => (cat.name))}</p> */}
          <p className="post-category">{artCat.name}</p>
            <h3 className="post-title">{article.title_article}</h3>
            <p className="post-excerpt">{article.excerpt_article}</p>
            <div className="btn-secondary">
              {/* <Link href={`/blog/${article.slug}`} className="btn-card">Læs mere</Link> */}
              <div className="text-1 bold">Read More</div>
              <span className="material-symbols-rounded">article</span>
            </div>
          </div>
        </div>
      </Link>

      

    </>
  );
}