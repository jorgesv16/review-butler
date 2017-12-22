import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import API from "../../utils/API";
import ReviewDetail from "../../components/ReviewDetail";
import ReviewList from "../../components/ReviewList";

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
			<div>
				<ReviewList
					onReviewSelect={selectedReview => this.setState(selectedReview)}
					reviews={this.state.reviews}
				/>

				<ReviewDetail review={this.state.selectedReview} />

			</div>
		);
	}
}

export default Inbox;
