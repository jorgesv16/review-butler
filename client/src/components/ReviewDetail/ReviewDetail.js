import React from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";

const ReviewDetail = ({ review }) => {
	if (!review) {
		return <div>Loading...</div>;
	}

	//display a number of StarIcon components based rating (1 - 5)
	let stars = [];
	for (var i = review.rating - 1; i >= 0; i--) {
		 stars.push(<StarIcon key={i}/>);
	}

	return (
		<div className="float-md-left">
			<div className="review-container full-height review-detail">
				<p>{review.title}</p>
				<p>Text: {review.rating}</p>
				{stars}
			</div>
		</div>
	);
};

export default ReviewDetail;
