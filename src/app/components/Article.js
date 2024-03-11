// 'use client';

import Image from "next/image";
import Link from "next/link";

// This component receives the props {article} from the blog/page.js
// Uses that props to set up the card for each article in the list
// Each card links to the article [slug]
// It will open the article --> page.js inside the [slug]
// And pass the params through the URL / href / Link tag to the slug/page.js

export default function Article({ article }) {

  console.log(article);

  return (
    <>
      
      <Link href={`/blog/${article.slug}`} key={article.id} article={article} className="post-link">
        <div className="post">
          <div className="img-cat-container">
            {/* <Image src={article["_embedded"]["wp:featuredmedia"]["0"].link} width={160} height={90} alt="Image"></Image> */}
            <Image src={article.image_article} width={160} height={90} alt="Image"></Image>
            <p className="post-category">{article["_embedded"]["wp:term"]["0"]["0"].name}</p>
          </div>
          <h3>{article.title.rendered}</h3>
          <p>{article.excerpt.rendered}</p>
          <div className="open-post">
            {/* <Link href={`/blog/${article.slug}`} className="btn-card">Læs mere</Link> */}
            <div className="btn-card">Læs mere</div>
          </div>
        </div>
      </Link>
    </>
  );
}