import React, { Component } from "react";
import API from "../../utils/API";
import ReviewDetail from "../../components/ReviewDetail";
import ReviewList from "../../components/ReviewList";

class Inbox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			selectedReviewID: null
		};
		this.loadReviews();
	}

	loadReviews() {
		API.getReviews()
			.then(res =>
				this.setState({
					reviews: res.data,
					selectedReviewID: res.data[0]._id  //set the initial review to the first review ID
				})
			)
			.catch(err => console.log(err));
	}

	openReview(id) {
		// const reviews = this.state.reviews;
		// const index = reviews.findIndex(x => x._id === id);
		// reviews[index].read = 'true';
		this.setState({
			selectedReviewID: id,
			// reviews,
		});
	}

	render() {
		//get the current review
		const currentReview = this.state.reviews.find(x => x._id === this.state.selectedReviewID);
		return (
			<div>
				<ReviewList
					reviews={this.state.reviews}
					onReviewSelected={(id) => { this.openReview(id); }}
					selectedReviewID={this.state.selectedReviewID}
					
				/>
				<ReviewDetail review={currentReview} />
			</div>
		);
	}
}

export default Inbox;

//selectedReview => this.setState({selectedReview: null})
