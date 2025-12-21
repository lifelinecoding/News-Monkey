import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      api_key: "https://newsapi.org/v2/top-headlines?country=us&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=1&pageSize=23",
      page: 1,
    };
  }

  componentDidMount = async() => {
    const response = await fetch(this.state.api_key);
    const data = await response.json();
    this.setState({ articles: data.articles });
  }

  handleNextClick = async() => {
    const nextPage = this.state.page + 1;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=${nextPage}&pageSize=23`);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      page: nextPage
    });
  }

  handlePrevClick = async() => {
    const prevPage = this.state.page - 1;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=${prevPage}&pageSize=23`);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      page: prevPage
    });
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
        <div className="d-flex flex-row justify-content-between my-4">
          <button disabled = {this.state.page <= 1} onClick={this.handlePrevClick} type="button" class="btn btn-dark">&larr; Previous</button>
          <button disabled={Math.ceil(this.state.articles.length / 23) < this.state.page} type="button" onClick={this.handleNextClick} class="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
