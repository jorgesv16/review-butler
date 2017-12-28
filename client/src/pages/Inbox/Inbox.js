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
		//set the review to read in database
		const currentDate = Date.now();
		API.updateReview(id, {review_read: currentDate})
		.catch(err => console.log(err));

		const reviews = this.state.reviews;
		const index = reviews.findIndex(x => x._id === id);
		reviews[index].review_read = currentDate;
		this.setState({
			selectedReviewID: id,
		});
	}

	toggleResponded(id) {
		const reviews = this.state.reviews;
		const index = reviews.findIndex(x => x._id === id);

		//check if response_date exists, if so set to null
		if (reviews[index].response_date) {
			console.log('date exists')
			API.updateReview(id, {response_date: null})
			.catch(err => console.log(err));
			reviews[index].response_date = null;
		}
		//the review has no date so set it
		else {
			console.log('no date set')
			const currentDate = Date.now();
			API.updateReview(id, {response_date: currentDate})
			.catch(err => console.log(err));
			reviews[index].response_date = currentDate;
		}
		//update the state to refresh page
		this.setState({
			selectedReviewID: id,
			reviews: reviews
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
				<ReviewDetail 
					review={currentReview} 
					onRespondedClicked={(id) => {this.toggleResponded(id);}}
				/>
			</div>
		);
	}
}

export default Inbox;

//selectedReview => this.setState({selectedReview: null})
