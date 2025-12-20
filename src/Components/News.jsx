import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        {/* <h2>News Component</h2> */}
        <div className="row my-4">
            <div className="col-md-4">
                <NewsItem 
                  title="My first news"
                  description="This is a description of my first news item."   />  
            </div>   
        </div>
        
      </div>
    )
  }
}

export default News;