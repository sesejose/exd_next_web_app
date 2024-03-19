import Article from "@/app/components/Article";
import { reqUrl } from "@/app/config";
import Image from "next/image";
import Link from "next/link";
// import ArticleOthers from "@/app/components/ArticlesOthers";

// It receive the {params} from the component Article.js dynamic URL
// If I console.log the params => I'll see that this is the slug defined in the link of the component
// It uses those { params } to fetch the article clicked from the list at blog/page.js
// Then it defines the variable { post } to set up the elements for the details in the return


// With this particular function I'm fetching the list of Articles
async function getArticles(data) {
    const res = await fetch(`${reqUrl}`);
    // const data = await res.json();
    return res.json();
    // console.log('Articles', data);

  }

export default async function Post( { params } ) {

    console.log('PAAAAAAAAAAAAAAAAAAAAAAARAMS', params);

    // const articlesData = getArticles(data);
    // console.log('AAAAAAAAAAAAAAAAAAAAArticles', data);

    // const req = await fetch(`${reqUrl}/posts?slug=go-live-cake-danish-refugee-council`);
    const req = await fetch(`${reqUrl}&slug=${params.slug}`);
    const posts = await req.json();
    // const [posts, articles] = await Promise.all([req, articlesData])
    // Variable for the individual article
    const post = posts[0];

    console.log('POOOOOOOOOOST', post);
    console.log("works");

    // const imgageBg = post["_embedded"]["wp:featuredmedia"]["0"].link;
    const imgageBg = post.image_article.rendered;

    return (
        <>
            <div className="wide">
                <div className="col-12 article-main-image" style={{backgroundImage: `url(${imgageBg})`}}>  
                <div className="overlay">
                    <div className="flex-column-center">
                        <p className="zero bold">Created: {post.date}</p>
                        <p className="post-category bold">{post["_embedded"]["wp:term"]["0"]["0"].name}</p>
                    </div>

                </div>
                </div>
                
                <div id="article_opened">
                    {/* <div className="grid-center">
                        <div className="col-12" > 
                        className="article-main-image" style={{backgroundImage: `url(${imgageBg})`}}        
                        </div>
                    </div> */}
                    
                    <div className="grid-center">
                        <div className="col-3-11 flex-column-center pb-large">
                            <h2 className="title-article-opened">{post.title_article.rendered}</h2>
                            <Image src={post.body_image_article.rendered} width={160} height={90} alt="Image" className="post-img-body"></Image>
                            <div className="span bold purple-light">{post.body_caption_article.rendered}</div>
                            <h3 className="ptb-medium">{post.body_headline_article.rendered}</h3>
                            {/* <div className="text-1">{post.body_text_article.rendered}</div> */}
                            <div className="text-1">
                                <p>{post.body_text_article.value[0]}</p>
                                <p>{post.body_text_article.value[1]}</p>
                                <p>{post.body_text_article.value[2]}</p>
                            </div>
                            <div className="article-quote p-mobile-medium text-center">{post.body_quote_article.rendered}</div>
                            <div className="text-1">{post.body_more_text_article.rendered}</div>
                            <div className="bold ptb">{post.body_link_text_article.rendered}</div>
                            <Link href={`${post.body_link_article.rendered}`} className="text-link-purple">{post.body_link_article.rendered}</Link>
                            <div className="bold ptb">{post.body_email_text_article.rendered}</div>
                            <Link href={`${post.body_email_article.rendered}`} className="text-link-purple">{post.body_email_article.rendered}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



{/* <div className="grid-blog">
    {articles.map((article) => (
        <ArticleOthers key={article.id} article={article}></ArticleOthers>
    ))}
</div> */}