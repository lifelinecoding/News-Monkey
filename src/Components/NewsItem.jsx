import React, { Component } from "react";
import No_Image from '../No_Image.webp';

export class NewsItem extends Component {

  render() {
    let { title, description, url, urlToImage } = this.props;
    // this.state = { articles: this.articles, loading: false };
    return (
      <div className="card d-flex flex-column p-1 shadow-lg" style={{height: "100%" }}>
        <img src={urlToImage? urlToImage : No_Image} className="card-img-top" alt="..."/>
        <div className="card-body d-flex flex-column  justify-content-between ">
          <h5 className="card-title overflow-hidden">{title? title : "This news has no title"}</h5>
          <p className="card-text overflow-hidden">{description? description : "No description available"}</p>
          <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark" style={{width : "45%", height: "40px", alignSelf: "flex-start"}}>
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
