
'use client'

import Article from "../components/Article";
import { reqUrl } from "@/app/config";
import InsightsHero from "../components/InsightsHero";
import { useState, useEffect } from "react";

// I fetch the articles and pass them as props to and through the Article component tag 
export default function Insights() {
  const initialPostList = 8; // Number of articles to display initially
  const incrementInitialPostList = 4; // Number of articles to add each time the "load more" button is clicked
  // States used in Load more
  const [displayPosts, setDisplayPosts] = useState(initialPostList);
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  // Separate State for Filtered Articles: Added filteredArticles to store and display the filtered list of articles, avoiding direct mutation of the articles state.
  const [searchText, setSearchText] = useState('');
  // Filter
  const [filter, setFilter] = useState('');


  // ********************   Fetching Arrticles from WordPress rest API   *****************************************

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


   // ********************   Loading More Articles   *****************************************************


  // Function triggered by event "Load more"
  const loadMore = () => {
    setDisplayPosts(displayPosts + incrementInitialPostList);
  };


  // ********************   Search   *********************************************************************

  // Search Input ON Change
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };


  // Search Function ( By Filtering )
  // 1. We define a new const "filtered" with the new array with the filtered articles - those that we want.
  // 2. The value for this array will be the return, and this is a list with those articles that includes the Text written in the input field that at the same time defines an State, called at the end as a paramenter.
  // 3. As I do in the Filter Function I used Dependencies: [searchText, articles] are the dependencies of this useEffect. This means that the function inside useEffect will run whenever either searchText or articles changes.
  useEffect(() => {
    // A variable 
    const filtered = articles.filter((article) => {
      const text = searchText.toLowerCase();
      return article.title_article.rendered.toLowerCase().includes(text);
    });
    setFilteredArticles(filtered);
  }, [searchText, articles]);

  

  // Search Button ON Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const filtered = articles.filter((article) => {
    const text = searchText.toLowerCase();
    return article.title_article.rendered.toLowerCase().includes(text);
    });
    setFilteredArticles(filtered);
  };


// ********************   Filter   *********************************************************************

// Select Option to filter (setState for filter)
  const handleFilterSelected = (event) => {
    setFilter(event.target.value);
    console.log(filter);
  };

  // Filter Function
  // 1. We define a new const "filterArticles" with the new array with the filtered articles - those that we want.
  // 2. The value for this array will be the return, and this is a list with those articles that includes the filter selected, this is the Value of the option.   
  // 3. As I do in the Search Function I use Dependencies: [filter, articles] are the dependencies of this useEffect. This means that the function inside useEffect will run whenever either filter or articles changes.
  useEffect(() => {
    // A variable 
    const filterArticles = articles.filter((article) => {
    const filterSelected = filter.toLowerCase();
    return article.title_article.rendered.toLowerCase().includes(filterSelected);
    });
    setFilteredArticles(filterArticles);
  }, [filter, articles]);


  // ********************   Return for Showing Page   *********************************************************************


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


// If the amount of objects in displayPosts (number) is less than the amount in filteredArticles "AND" button is clicked
// Use the CONST { LoadMore } that has the Value of setting a State for setDisplayPosts (displayPosts + incrementInitialPostList); other 2 states !
// Once the Value/State for displayPost is defined the amount of Post to display also changes, increments.