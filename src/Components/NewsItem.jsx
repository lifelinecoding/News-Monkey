import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let { title, description, url, urlToImage } = this.props;
    // this.state = { articles: this.articles, loading: false };
    return (
      <div className="card d-flex flex-column p-1 shadow-lg" style={{height: "100%" }}>
        <img src={urlToImage? urlToImage : "https://imgs.search.brave.com/27Ng8ZYgWXhjN4dFFq-3ZvCWIleKRqNzPrsHvLhGlak/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjgv/Mjg1LzAwMy9zbWFs/bC9ibHVlLTNkLW5v/LXRleHQtaXNvbGF0/ZWQtb24tdHJhbnNw/YXJlbnQtYmFja2dy/b3VuZC1mcmVlLXBu/Zy5wbmc"} className="card-img-top" alt="..."/>
        <div className="card-body d-flex flex-column  justify-content-between ">
          <h5 className="card-title overflow-hidden">{title}</h5>
          <p className="card-text overflow-hidden">{description}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark" style={{width : "45%", height: "40px", alignSelf: "flex-start"}}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
