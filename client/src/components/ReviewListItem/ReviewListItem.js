import React from "react";
import SaveBtn from "../../components/SaveBtn";
import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const ReviewListItem = props => (
	<li>
		<a className="" href="#">
			<div className="review-item-icons">
				<i className="material-icons md-18 md-dark md-inactive">reply</i>
			</div>
			<div className="review-item-details">
				<div className="review-item-heading">
					<div className="review-item-date float-right">12/20/17</div>
					<div className="review-item-author">Ethan H. {props.obj}</div>
				</div>
				<div className="review-item-rating">
					<i className="material-icons md-18 yellow">star_rate</i>
					<i className="material-icons md-18 yellow">star_rate</i>
					<i className="material-icons md-18 yellow">star_rate</i>
					<i className="material-icons md-18 yellow">star_rate</i>
				</div>
				<div className="review-item-snippet">
					Fast delivery. Burrito was delicious. Only down side was the
					ordering menu. Did not give me many options for add-ons.
					Definitely comparable to Gordo.
				</div>
			</div>
		</a>
	</li>

);

export default ReviewListItem;
