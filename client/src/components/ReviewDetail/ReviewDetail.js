import API from "../../utils/API";
import React, { Component } from "react";
import "./ReviewDetail.css";
import StarIcon from "../../components/StarIcon";
// import ResponseField from "../../components/ResponseField";
import Sentence from "../../components/Sentence";
import Tag from "../../components/Tag";
import RaisedButton from "material-ui/RaisedButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import TextField from "material-ui/TextField";
import Moment from "react-moment";

class ReviewDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responseText: "loading"
		};

		this.updateResponse = this.updateResponse.bind(this);
		this.updateResponseText = this.updateResponseText.bind(this);

	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			responseText: nextProps.review.response_text
		});
	}

	updateResponseText(newText) {
		const reviewID = this.props.review._id;
		this.props.review.response_text = newText;
		API.updateReview(reviewID, { response_text: newText });
	}


	onNewResponseClicked() {
		let phrases = [];
		let nounPhrases = [];
		let positiveNoun;
		let negativeNoun;
		let currentReview = this.props.review;
		let rating = currentReview.rating;
		//check if tags exist
		if (currentReview.tags) {
			console.log("Tags exist");

			positiveNoun = this.getPositiveNoun(currentReview.tags);
			// console.log("positiveNoun", positiveNoun);
			if (positiveNoun) {
				//5 is a positive phrase
				nounPhrases[0] = this.findNounPhrase(3, 5, positiveNoun);
			}

			negativeNoun = this.getNegativeNoun(currentReview.tags);
			// console.log("negativeNoun", negativeNoun);
			if (negativeNoun) {
				//1 is a negative phrase
				nounPhrases[1] = this.findNounPhrase(3, 1, negativeNoun);
			}
		} else {
			console.log("No Tags Found");
		}

		//iterate through all phrase categories to build a sentence (there is 1,2,3,4,6)
		for (var i = 1; i < 6; i++) {
			//find a random phrase for each category
			//category 3 contains phrases regarding positive (and negative) nouns found in the review
			if (i != 3) {
				// phrases[i] = this.findPhrase(i, rating);
				this.updateResponse = this.updateResponse.bind(this);

			}
		}
	}

	findPhrase(category, rating) {
		// console.log("findPhrase", "category:", category, "rating:", rating);
		API.getPhrases({ category: category, rating: rating })
			.then(res => {
				// console.log('then', 'res.data:', res.data)
				//select a random response from the phrases
				const randomIndex = Math.floor(Math.random() * res.data.length);
				//this is a phrase relating to a positive noun
				console.log(
					`findPhrase(${category}) ${res.data[randomIndex].text}`
				);
				return res.data[randomIndex].text;
			})
			.catch(err => console.log(err));
	}

	findNounPhrase(category, rating, noun) {
		// console.log('findNounPhrase', 'category:', category, 'rating:', rating, 'noun:', noun)
		API.getPhrases({ category: category, rating: rating })
			.then(res => {
				// console.log('then', 'res.data:', res.data)
				//select a random response from the phrases
				const randomIndex = Math.floor(Math.random() * res.data.length);
				//this is a phrase relating to a positive noun
				if (rating === 5) {
					//insert the positive noun into the phrase
					// console.log('findNounPhrase(3 +)', res[randomIndex].text.replace(/-NOUN-/g, noun));
					
console.log("Positive Phrase", res.data[randomIndex].text.replace(/-NOUN-/g, noun));
					return res.data[randomIndex].text.replace(/-NOUN-/g, noun);

					//this is a phrase relating to a positive noun
				} else if (rating === 1) {
					//insert the positive noun into the phrase
					// console.log('findNounPhrase(3 -)', res[randomIndex].text.replace(/-NOUN-/g, noun));
					
console.log('Negative Phrase:', res.data[randomIndex].text.replace(/-NOUN-/g, noun));
					return res.data[randomIndex].text.replace(/-NOUN-/g, noun);
				}
			})
			.then(res => {
				//wait half a second to ensure all database calls are finished
					setTimeout(function() { this.updateResponse("aaa") }.bind(this), 500);
			})
			.catch(err => console.log(err));
	}

	getNegativeNoun(tags) {
		let minScore = -0.5;
		let negativeNoun = "";
		tags.forEach((tag, i) => {
			const score = tag.sentiment.score;
			const noun = tag.name;
			// console.log(`${noun} : ${score}`);
			if (score < minScore) {
				minScore = score;
				negativeNoun = tag.name;
				// console.log('postiveNoun:', negativeNoun)
			}
		});
		return negativeNoun;
	}

	getPositiveNoun(tags) {
		let maxScore = 0.5;
		let positiveNoun = "";
		tags.forEach((tag, i) => {
			const score = tag.sentiment.score || 0;
			const noun = tag.name;
			// console.log(`${noun} : ${score}`);
			if (score > maxScore) {
				maxScore = score;
				positiveNoun = tag.name;
				// console.log('postiveNoun:', positiveNoun)
			}
		});
		return positiveNoun;
	}

	updateResponse() {
		console.log("L403", "updateResponse");

	}

	render() {
		let review = this.props.review;
		// console.log("review", review);
		const onRespondedClicked = this.props.onRespondedClicked;

		if (!review) {
			return <div>Loading...</div>;
		} else {
			// const responseText = review.response_text;
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
		// console.log("response", response);

		return (
			<div className="full-height review-detail">
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
					id={review._id}
					multiLine={true}
					fullWidth={true}
					value={this.state.responseText}
					onChange={(e, responseText) => {
						this.setState({ responseText });
						this.updateResponseText(responseText);
					}}
				/>
				<br />
				<div>
					Responded:{" "}
					{review.response_date ? (
						<Moment
							date={review.response_date}
							format="MM/DD/YYYY"
						/>
					) : (
						"No"
					)}{" "}
				</div>
				<RaisedButton
					label="New Response"
					onClick={() => this.onNewResponseClicked()}
					className="btn-space"
					icon={<i className="material-icons">autorenew</i>}
				/>
				<CopyToClipboard
					text={this.state.responseText}
					onCopy={() => this.setState({ copied: true })}
				>
					<RaisedButton
						label="Copy & Open Yelp"
						className="btn-space"
						onClick={() =>
							window.open("https://biz.yelp.com/login", "_blank")
						}
					/>
				</CopyToClipboard>

				<RaisedButton
					label={
						review.response_date
							? "Mark Unresponded"
							: "Mark Responded"
					}
					onClick={() => onRespondedClicked(review._id)}
					className="btn-space"
				/>
			</div>
		);
	}
}

export default ReviewDetail;
