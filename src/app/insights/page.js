
'use client'

import Article from "../components/Article";
import { reqUrl } from "@/app/config";
import InsightsHero from "../components/InsightsHero";
import { useState, useEffect } from "react";

// I fetch the articles and pass them as props to and through the Article component tag 
export default function Insights() {
  const initialPostList = 8; // Number of articles to display initially
  const incrementInitialPostList = 4; // Number of articles to add each time the "load more" button is clicked

  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  // Separate State for Filtered Articles: Added filteredArticles to store and display the filtered list of articles, avoiding direct mutation of the articles state.
  const [searchText, setSearchText] = useState('');
  // Filter
  const [filter, setFilter] = useState('');
  
  
  // async function getData() {
  //   const res = await fetch('https://exd-insight.dk/wp-json/wp/v2/article?_embed&per_page=100')
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.
   
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }
  
  //   return res.json()
  // }

  // Fetching the Array of Articles
  useEffect(() => {
    fetch('https://exd-insight.dk/wp-json/wp/v2/article?_embed&per_page=100')
      .then((res) => res.json())
      .then((articles) => {
        setArticles(articles);
        setFilteredArticles(articles); // Initially display all articles
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Function triggered by event "Load more"
  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
  };

  // Search Function ( Filter )
  useEffect(() => {
    // A variable 
    const filtered = articles.filter((article) => {
      const text = searchText.toLowerCase();
      return article.title_article.rendered.toLowerCase().includes(text);
    });
    setFilteredArticles(filtered);
  }, [searchText, articles]);

  // Search Input ON Change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  // Search Button ON Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = articles.filter((article) => {
      const text = searchText.toLowerCase();
      return article.title_article.rendered.toLowerCase().includes(text);
    });
    setFilteredArticles(filtered);
  };

  // Button to filter
  const handleFilterSelected = (event) => {
    setFilter(event.target.value);
    console.log(filter);
  };

  return (
    <>
      <InsightsHero />
      <div className="wide">
        <section className="grid-center">
          
          <div id="search" className="col-1-10">
            <div className="search-container">
              <form className="form-search" action="search"  onSubmit={handleSearchSubmit}>
                <label htmlFor='search-field'></label>
                <div className="input-group flex-row-center">
                  <input 
                    id="search-field" className="input" type="text" placeholder="Search.." name="search" value={searchText} onChange={handleSearchChange}
                  />
                  <button className="magnify" type="submit">
                    <span className="material-symbols-rounded">search</span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-10-13 flex-row-center">
            {/* Filter Options Desktop */}
            <div className="">Filter by Category</div>
            <select id="filter-desk" required="" className="filter-options" onChange={handleFilterSelected}>
              {/* <optgroup label="Option Group" className="group"> */}
              <option value="All" data-action="filter" data-filter="all">All articles</option>
              <option value="4me" data-action="filter" data-filter="prefect">4me</option>
              <option value="EX" data-action="filter" data-filter="expelled">EX</option>
              <option value="CS" data-action="filter" data-filter="Slytherin">Customer Stories</option>
              <option value="UX" data-action="filter" data-filter="Hufflepuff">User Experience (UX)</option>
              {/* </optgroup> */}
            </select>
          </div>
        </section>

        {/* Display Articles */}
        <section className="grid-blog padding">
          {filteredArticles.slice(0, displayPosts).map(article => (
            <Article 
              key={article.id}
              id={article.id}
              slug={article.slug}
              category={article["_embedded"]["wp:term"]["0"]["0"].name}
              image={article.image_article.rendered}
              title={article.title_article.rendered}
              excerpt={article.excerpt_article.rendered}
              bodyHeadline={article.body_headline_article.rendered}
              bodyImage={article.body_image_article.rendered}
              bodyCaption={article.body_caption_article.rendered}
              bodyText={article.body_text_article.rendered}
              bodyQuote={article.body_quote_article.rendered}
              bodyMoreText={article.body_more_text_article.rendered}
              bodyLinkText={article.body_link_text_article.rendered}
              bodyLink={article.body_link_article.rendered}
              bodyEmailText={article.body_email_text_article.rendered}
              bodyEmail={article.body_email_article.rendered}
            />
          ))}
        </section>
        
        {/* Load More Button */}
        <section className="grid-center padding">
          <div className="col-12 ptb-large">
            {displayPosts < filteredArticles.length && (
              <button onClick={loadMore} className="btn-secondary flex-row-center m-auto">
                Load more articles
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

// </section>
//         {/* Load More --> evaluates if displayPosts is lower than articles.length and of yes add a button if not "null" */}
//       <section className="grid-center padding">
//         <div className="col-12 ptb-large">
//             {displayPosts < articles.length ? ( 
//               <button onClick={loadMore} className="btn-secondary flex-row-center m-auto">Load more articles</button>
//           ) : null}
//         </div>
//       </section>