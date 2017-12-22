import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import ReviewListItem from "../../components/ReviewListItem";

const objects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class ReviewList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			reviews: [],
			index: "0" //set the articles index to 0 on initialisation (so when they scroll we can load more reviews?)
		};
	}
	//if component loaded get articles from database
	componentDidMount() {
		console.log('ReviewList: componentDidMount()');

		this.loadReviews(this.state.index);
	}

	loadReviews = index => {
		API.getReviews()
			.then(res =>
				this.setState({
					reviews: res.data
				})
			)
			.catch(err => console.log(err));
	};
	render() {
		return (
			<div className="float-md-left">
				<div className="reviews full-height">
					<ul>
						{this.state.reviews.map(function(review, i) {
							return (
								<ReviewListItem obj={review} key={review._id} />
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default ReviewList;

//not to will -> on scroll setState of index to a new number to load more reviews?
