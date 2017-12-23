import React, { Component } from "react";

import API from "../../utils/API";


class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      selectedReview: null
    };
    this.loadReviews();
  }

  loadReviews() {
    API.getReviews()
      .then(res =>
        this.setState({
          reviews: res.data,
          selectedReview: res.data[0]
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="float-md-left">
         <div className="dashboard-container full-height">
             Insert Dashboard Here
         </div>
     </div>
    );
  }
}

export default Inbox;
