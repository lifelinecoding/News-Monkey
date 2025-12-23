import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      api_key: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=1&pageSize=${this.props.pageSize}`,
      page: 1,
      totalResponse: 0,
    };
  }

  componentDidMount = () => {
    this.UpdateNews();
  };

  UpdateNews = async () => {
    this.setState({
      api_key: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=${this.state.page}&pageSize=${this.props.pageSize}`,
      loading: true,
    });
    const response = await fetch(this.state.api_key);
    const data = await response.json();
    this.setState({ articles: data.articles, loading: false, totalResponse: data.totalResults });
  };

  handleNextClick = () => {
    this.setState({
      page: this.state.page + 1,
    });
    this.UpdateNews();
  };

  handlePrevClick = () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.UpdateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4 fw-bold">
          News Monkey - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        {!this.state.loading && (
          <div className="row my-4 d-flex justify-content-center">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3 my-2" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    url={element.url}
                    urlToImage={element.urlToImage}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="d-flex flex-row justify-content-between my-4">
          <button
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={
              Math.ceil(this.state.totalResponse / this.props.pageSize) <
              this.state.page
            }
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
