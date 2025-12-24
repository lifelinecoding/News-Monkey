import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import ThemeContext from "../Context/ThemeContext";

export class News extends Component {
  static contextType = ThemeContext;

  static defaultProps = {
    country: "us",
    pageSize: 8,
  };

  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      api_key: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`,
      page: 1,
      totalResponse: 0,
    };
  }

  componentDidMount = () => {
    this.UpdateNews();
  };

  UpdateNews = async () => {
    this.setState({
      api_key: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`,
      loading: true,
    });
    const response = await fetch(this.state.api_key);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      loading: false,
      totalResponse: data.totalResults,
    });
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

  Capitalize = (message) => {
    return message.charAt(0).toUpperCase() + message.slice(1);
  };

  render() {
    const { mode } = this.context;
    return (
      <div className="container my-3">
        <h1
          className={
            "text-center my-4 fw-bold" +
            (mode === "dark" ? " text-light" : " text-dark")
          }
        >
          {"News Monkey " +
            (this.props.category
              ? ` - ${this.Capitalize(this.props.category)}`
              : "") +
            " Top headlines"}
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
                    mode={mode}
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
            className={`${
              mode === "dark"
                ? "btn btn-success fw-bold"
                : "btn btn-danger fw-bold"
            }`}
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
            className={`${
              mode === "dark"
                ? "btn btn-success fw-bold"
                : "btn btn-danger fw-bold"
            }`}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
