import React from "react";
import "./ReviewListItem.css";
import StarIcon from "../../components/StarIcon";

const ReviewListItem = ({review, onReviewSelect, activeClass}) => {
	const reviewText = review.text;
	const reviewAuthor = review.user_name;
	let stars = [];

	let itemClass = "inactive";

	//display a number of StarIcon components based rating (1 - 5)
	for (var i = 0; i < review.rating; i++) {
		 stars.push(<StarIcon key={i}/>);
	}

	if (review.rating == 1) {
		itemClass= "active";
	}

	return (
		<li onClick={() => onReviewSelect(review)} className={itemClass}>
			
				<div className="review-item-icons">
					<i className="material-icons md-18 md-dark md-inactive">reply</i>
				</div>
				<div className="review-item-details">
					<div className="review-item-heading">
						<div className="review-item-date float-right">12/20/17</div>
						<div className="review-item-author">{reviewAuthor}</div>
					</div>
					<div className="review-item-rating">
						{stars}
					</div>
					<div className="review-item-snippet">
						{reviewText}
					</div>
				</div>

		</li>
		);

}

export default ReviewListItem;
