'use client';

import Image from "next/image";
// import Link from "next/link";
import { Link } from 'next-view-transitions'
//import { reqUrl } from "@/app/config";

// This component receives the props from the from article/page.js

export default function ArticleOthers({ id, category, title, image, excerpt, bodyHeadline, bodyImage, bodyCaption, bodyText, bodyQuote, bodyMoreText, bodyLinkText, bodyLink, bodyEmailText, bodyEmail, slug }) {

  //const req = await fetch(`${reqUrl}/posts?slug=${params.slug}`);
  //const posts = await req.json();

  return (
    <>
      <Link href={`/insights/${slug}`} key={id} className="post-link">
        <div className="post">
          <div className="post-img-container">
            <Image src={image} width={160} height={90} alt="Image"></Image>
          </div>
          <div className="post-description-others">
            <div className="flex-column-left">
              <p className="post-category">{category}</p>
              {/* <p className="post-category">{article["_embedded"]["wp:term"]["0"]["0"].name}</p> */}
              <div className="text-2 bold post-title">{title}</div>
              {/* <h4 className="post-title">{article.title_article}</h4> */}
              <div className="counter post-excerpt">{excerpt}</div>
              {/* <p className="post-excerpt">{article.excerpt_article}</p> */}
            </div>
            <div className="btn-small">
              <div className="bold">Read More</div>
              <span className="material-symbols-rounded">article</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}