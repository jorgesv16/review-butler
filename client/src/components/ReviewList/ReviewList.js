import React from "react";
import { Link } from "react-router-dom";
import ReviewListItem from "../../components/ReviewListItem";
let objects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ReviewList = props => (
	<div className="float-md-left">
		<div className="reviews full-height">
			<ul>
				{objects.map(function(object, i) {
					return <ReviewListItem obj={object} key={i} />;
				})}
			</ul>
		</div>
	</div>
);

export default ReviewList;
