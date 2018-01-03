import React from "react";
import "./Graph.css";
import StarIcon from "../../components/StarIcon";
import Moment from "react-moment";

const Graph = ({ review }) => {
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

};

export default Graph;
