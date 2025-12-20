import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      api_key: "https://newsapi.org/v2/top-headlines?country=us&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=1&pageSize=20",
      page: 1,
    };
  }

  componentDidMount = async() => {
    const response = await fetch(this.state.api_key);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  render() {
    return (
      <div className="container my-3">
        <h1>News Monkey - Top Headlines</h1>
        <div className="row my-4 d-flex justify-content-center">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-2" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  url={element.url}
                  urlToImage={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    );

    // <div className="container my-3">
    //   <h1>News Monkey - Top Headlines</h1>
    //   <div className="row my-4 d-flex justify-content-center">
    //     <div className="col-md-3 my-2">
    //       <NewsItem
    //         title="My first news"
    //         description="This is a description of my first news item."
    //       />
    //     </div>
    //   </div>
    // </div>
  }
}

export default News;
