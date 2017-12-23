import React from "react";
import "./ReviewList.css";
import ReviewListItem from "../../components/ReviewListItem";


const ReviewList = ({reviews, selectedReviewID, onReviewSelected}) => {
	if (reviews.length === 0) {
		return (
			<div className="float-md-left">
				<div className="reviews full-height">
				You have no reviews
				</div>
			</div>
			)

	}
 
		return (
			<div className="float-md-left">
				<div className="reviews full-height">
					<ul>
						{reviews.map(function(review) {
							return (
								<ReviewListItem 
									onReviewClicked={(id) => { onReviewSelected(id); }}
									review={review} 
									active={selectedReviewID === review._id}
									key={review._id} 
									activeClass = {null}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		);
}

export default ReviewList;

//not to will -> on scroll setState of index to a new number to load more reviews?
