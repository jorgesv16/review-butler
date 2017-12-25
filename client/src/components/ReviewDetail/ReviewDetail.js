import React from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";
import Moment from "react-moment";

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
				<p><strong>title: </strong>{review.title}</p>
				<p><strong>user_name: </strong>{review.user_name}</p>
				<p><strong>Rating: </strong>{review.Rating}{stars}</p>
				<p><strong>sentiment_score: </strong>{review.sentiment_score}</p>
				<p><strong>word_count: </strong>{review.word_count}</p>
				<p><strong>review_date: </strong><Moment date={review.review_date} format="MM/DD/YYYY"/></p>
				<p><strong>response_date: </strong>{review.response_date}</p>
				<p><strong>photo: </strong>{review.photo}</p>
				<p><strong>tags: </strong>{review.tags}</p>
				<p><strong>review_read: </strong>{review.review_read}</p>
				<p><strong>business_id: </strong>{review.business_id}</p>
				<p><strong>timestamp: </strong>{review.timestamp}</p>
				<p><strong>external_id: </strong>{review.external_id}</p>
				
			</div>
		</div>
	);
};

export default ReviewDetail;
