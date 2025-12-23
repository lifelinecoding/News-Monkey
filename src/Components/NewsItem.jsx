import React, { Component } from "react";
import No_Image from "../No_Image.webp";

export class NewsItem extends Component {
  render() {
    let { title, description, url, urlToImage, time, author, source, mode } =
      this.props;
    // this.state = { articles: this.articles, loading: false };
    return (
      <div
        className={`card d-flex flex-column shadow-lg rounded ${mode === "dark" ? "bg-success" : "bg-danger"}`}
        style={{ height: "100%",padding: "1px" }}
      >
        <span
          className={`position-absolute top-0  translate-middle badge rounded-pill ${mode === 'dark' ? 'bg-success' : 'bg-danger'}`}
          style={{ left: "90%", zIndex: 1 }}
        >
          {source}
        </span>
        <img
          src={urlToImage ? urlToImage : No_Image}
          className="card-img-top"
          alt="Error in loading"
        />
        <div
          className={
            "card-body d-flex flex-column justify-content-between " +
            (mode === "dark"
              ? "text-light"
              : "text-dark")
          }
          style={{
            backgroundColor: mode === "dark" ? "#330530" : "white",
          }}
        >
          <h5 className="card-title overflow-hidden">
            {title ? title : "This news has no title"}
          </h5>
          <p className="card-text overflow-hidden">
            {description ? description : "No description available"}
          </p>
          <p className={"card-text fs-6 text"  + (mode === "dark" ? " text-light" : "")}>
            {`By ${
              author ? author : "Unknown"
            } on ${new Date(time).getDate()}/${new Date(
              time
            ).getMonth()}/${new Date(time).getFullYear()}`}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className={`${mode === "dark" ? "btn btn-success" : "btn btn-danger"}`}
            style={{ width: "45%", height: "40px", alignSelf: "flex-start" }}
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
