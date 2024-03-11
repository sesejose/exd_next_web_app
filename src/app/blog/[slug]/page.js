import { reqUrl } from "@/app/config";
import Image from "next/image";
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
    const imgageBg = post.image_article;

    return (
        <>
        <div className="wide">
                <div className="article-main-image" style={{backgroundImage: `url(${imgageBg})`}}></div>
            <div id="article">
                {/* <Image src={post["_embedded"]["wp:featuredmedia"]["0"].link} width={160} height={90} alt="Image" className="article-main-image"></Image> */}
            </div>
        </div>
        <div className="grid">
            <h2 className="col-12">{post.title_article}</h2>
            <p>{post.text_article}</p>
                {/* <div className="grid-blog">
                    {articles.map((article) => (
                        <ArticleOthers key={article.id} article={article}></ArticleOthers>
                    ))}
                </div> */}
        </div>
        </>
    )
}



