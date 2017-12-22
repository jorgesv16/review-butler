import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import API from "./utils/API";
import ReviewDetail from "./components/ReviewDetail";
import ReviewList from "./components/ReviewList";


class App extends Component {
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
	};


	render() {
		console.log("reviews:");
		console.log(this.state.reviews);
		return (
		<main class="container-full full-height">
        	<div class="row">
				<ReviewList
				onReviewSelect={selectedReview => this.setState(selectedReview)}
				reviews={this.state.reviews}/>
				<ReviewDetail review={this.state.selectedReview}/>
            </div>
		</main>
		);
	}
}
export default App;