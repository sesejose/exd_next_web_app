import { reqUrl } from "@/app/config";
import ArticleOthers from "@/app/components/ArticlesOthers";

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
    const req = await fetch(`${reqUrl}/posts?slug=${params.slug}`);
    const posts = await req.json();
    // const [posts, articles] = await Promise.all([req, articlesData])
    // Variable for the individual article
    const post = posts[0];

    console.log('POOOOOOOOOOST', post);

    return (
        <>
        <h2>{post.title.rendered}</h2>
        <p>{post.content.rendered}</p>
            {/* <div className="grid-blog">
                {articles.map((article) => (
                    <ArticleOthers key={article.id} article={article}></ArticleOthers>
                ))}
            </div> */}
        </>
    )
}



