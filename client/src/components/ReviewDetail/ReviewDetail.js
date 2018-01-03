import React from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";
import ResponseField from "../../components/ResponseField";
import Sentence from "../../components/Sentence";
import Tag from "../../components/Tag";
import RaisedButton from "material-ui/RaisedButton";
import {CopyToClipboard} from 'react-copy-to-clipboard';

import TextField from "material-ui/TextField";

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

	const response = review.response_text;

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
					<h2>{review.title ? review.title : "No Title"}</h2>
				</div>
				<div className="review-date">
					<Moment date={review.review_date} format="MM/DD/YYYY" />
				</div>
			</div>
			<div className="review-rating">
				<h4>{stars}</h4>
			</div>
			<div className="review-text">
				{sentences[0] ? sentences : review.text}
			</div>
			<div className="flex-row">
				<div className="review-tags">
					<span className="tags-title">Tags: </span> {tags}
				</div>
			</div>
			<br />
			<h2>Response</h2>
			<TextField
				multiLine={true}
				fullWidth={true}
				value={review.response_text}
			/>
			<br />
			<div className="d-inline">
				Responded:{" "}
				{review.response_date ? (
					<Moment date={review.response_date} format="MM/DD/YYYY" />
				) : (
					"No"
				)}{" "}
			</div>
			<RaisedButton
				label={
					review.response_date ? "Mark Unresponded" : "Mark Responded"
				}
				onClick={() => onRespondedClicked(review._id)}
			/>

			<li>
				<strong>business_id: </strong>
				{review.business_id}
			</li>
		</div>
	);
};

export default ReviewDetail;
