import React, { useEffect, useState } from "react";
import Newsitem from "./newsitem";
import Loading from "./loading";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [Articles, setArticles] = useState([]);
  const [Page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [TotalResults, setTotalResults] = useState(0);
  console.log(Articles);
  const update = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${Page}&pagesize=${props.size}`;
    props.setProgress(35);
    setLoading(true);
    let data = await fetch(url);
    let pdata = await data.json();
    props.setProgress(75);
    setArticles(pdata.articles);
    setTotalResults(pdata.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitallize(props.category)} - MonkeyNews`;
    update();
  }, []);

  const capitallize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchMoreData = async () => {
    setPage(Page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      Page + 1
    }&pagesize=${props.size}`;
    setLoading(true);
    let data = await fetch(url);
    let pdata = await data.json();
    // setArticles(Articles.concat(pdata.articles))
    setArticles(Articles.concat(...pdata.articles));
    setTotalResults(pdata.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1
        className="text-center mt-9 display-4"
        style={{ marginTop: "3.5rem" }}
      >
        MonkeyNews-Top Headlines from {capitallize(props.category)}
      </h1>
      {loading && <Loading />}
      <InfiniteScroll
        dataLength={Articles?.length}
        next={fetchMoreData}
        hasMore={
          Articles
            ? Articles.length !== TotalResults
            : console.log("there is nothing to view")
        }
        loader={loading && <Loading />}
      >
        <div className="container">
          <div className="row">
            {Articles?.map((element) => {
              return (
                <div className="col-sm-6 col-md-6 col-lg-4" key={element.url}>
                  <Newsitem
                    title={
                      element.title
                        ? element.title.slice(0, 45)
                        : "Click the link below to check the title"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : "Click the link below to check the description"
                    }
                    url={
                      !element.urlToImage
                        ? "https://media.cnn.com/api/v1/images/stellar/prod/230613132454-mormon-cricket-invades-town-affil-pkg-vpx.jpg?c=16x9&q=w_800,c_fill"
                        : element.urlToImage
                    }
                    href={element.url}
                    author={
                      element.author ? element.author.slice(0, 25) : "unknown"
                    }
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
