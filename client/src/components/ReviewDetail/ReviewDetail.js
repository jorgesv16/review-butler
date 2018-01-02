import React from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";
import Sentence from "../../components/Sentence";
import Tag from "../../components/Tag";
import Form from "../../components/Form";

import Moment from "react-moment";

const ReviewDetail = ({ review, onRespondedClicked }) => {
	if (!review) {
		return <div>Loading...</div>;
	}

	//display a number of StarIcon components based rating (1 - 5)
	let stars = [];
	for (var i = review.rating - 1; i >= 0; i--) {
		stars.push(<StarIcon key={i} size="large" />);
	}

	//display the color coded sentences based on sentiment (green = positive, red = negative)
	let sentences = [];
	review.sentences_object.forEach((sentence, i) => {
		sentences.push(
			<Sentence
				score={sentence.sentiment.score}
				text={sentence.text.content}
				key={i}
			/>
		);
	});

	//display the color coded sentences based on sentiment (green = positive, red = negative)
	let tags = [];
	review.tags.forEach((tag, i) => {
		const score = tag.sentiment.score;
		const salience = tag.sentiment.salience;
		//if the score is not neutral display the tag
		if (score) {
			tags.push(
				<Tag
					score={score}
					salience={salience}
					name={tag.name}
					key={i}
				/>
			);
		}
	});

	return (
		<div className="review-container full-height review-detail">
			<div className="flex-row">
				<div className="review-user">
					<h4>{review.user_name}</h4>
				</div>
			</div>

			<div className="flex-row">
					<img
						className="review-logo"
						src="img/yelp.png"
						alt="Yelp Logo"
					/>
				<div className="review-title">
					<h2>{review.title}</h2>
				</div>
				<div className="review-date">
					<Moment date={review.response_date} format="MM/DD/YYYY" />
				</div>
			</div>

				<div className="review-rating">
					<h4>{stars}</h4>
				</div>

				<div className="review-text">
					{sentences}
			</div>	
							<div className="review-tags">
					{tags}
			</div>			


				{review.response_text}{" "}
				<button onClick={() => onRespondedClicked(review._id)}>
					set responded
				</button>

			<li>
				<strong>sentiment_score: </strong>
				{review.sentiment_score}
			</li>
			<li>
				<strong>word_count: </strong>
				{review.word_count}
			</li>
			<li>
				<strong>review_date: </strong>
				<Moment date={review.review_date} format="MM/DD/YYYY" />
			</li>
			<li>
				<strong>response_date: </strong>
				{review.response_date}
			</li>
			<li>
				<strong>photo: </strong>
				{review.photo}
			</li>
			<li>
				<strong>review_read: </strong>
				{review.review_read}
			</li>
			<li>
				<strong>business_id: </strong>
				{review.business_id}
			</li>
			<li>
				<strong>timestamp: </strong>
				{review.timestamp}
			</li>
			<li>
				<strong>external_id: </strong>
				{review.external_id}
			</li>
		</div>
	);
};

export default ReviewDetail;
