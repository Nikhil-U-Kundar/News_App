import React, { Component } from 'react';

export class Newsitem extends Component {
  render() {
    const { title, description, imageurl, newsurl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={!imageurl ? "https://media.gettyimages.com/id/1338718098/photo/england-v-india-fourth-lv-insurance-test-match-day-five.jpg?s=612x612&w=gi&k=20&c=yruPkk81rYoeOQvK-FCouB4wqMpbmjZJEkFbBep2ahY=" : imageurl}
            alt={`${title} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a rel="noreferrer" href={newsurl} className="btn btn-primary">More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
