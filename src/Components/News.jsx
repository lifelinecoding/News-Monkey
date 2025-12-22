import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 8
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  };

  
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      api_key: `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=1&pageSize=${this.props.pageSize}`,
      page: 1,
      totalResponse: 0
    };
  }

  componentDidMount = async() => {
    const response = await fetch(this.state.api_key);
    const data = await response.json();
    console.log(data);
    this.setState({ articles: data.articles, loading:false, totalResponse: data.totalResults });
  }

  handleNextClick = async() => {
    this.setState({loading: true});
    const nextPage = this.state.page + 1;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=${nextPage}&pageSize=${this.props.pageSize}`);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      page: nextPage,
      loading: false
    });
  };

  handlePrevClick = async() => {
    this.setState({loading: true});
    const prevPage = this.state.page - 1;
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=d3cb4fbd575b4f0baf6d4b38922ec0ce&page=${prevPage}&pageSize=${this.props.pageSize}`);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      page: prevPage,
      loading: false
    });
  };


  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center my-4 fw-bold">News Monkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        {!(this.state.loading) && <div className="row my-4 d-flex justify-content-center">
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
        </div>}
        <div className="d-flex flex-row justify-content-between my-4">
          <button disabled = {this.state.page <= 1} onClick={this.handlePrevClick} type="button" className="btn btn-dark">&larr; Previous</button>
          <button disabled={Math.ceil(this.state.totalResponse / this.props.pageSize) < this.state.page} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
