import React from "react";
import "./ReviewList.css";
import ReviewListItem from "../../components/ReviewListItem";


const ReviewList = props => {
 
		return (
			<div className="float-md-left">
				<div className="reviews full-height">
					<ul>
						{props.reviews.map(function(review) {
							return (
								<ReviewListItem 
									onReviewSelect={props.onReviewSelect()}
									review={review} 
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
