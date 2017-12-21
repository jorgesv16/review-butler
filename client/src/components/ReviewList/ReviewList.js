import React from "react";
import SaveBtn from "../../components/SaveBtn";
import { Link } from "react-router-dom";
import { Col, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

const ReviewList = props => (
    <div class="float-md-left">
	    <div class="reviews full-height">
	        <ul>
	            <li class="row">
	                <a class="" href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/20/17
	                            </div>
	                            <div class="review-item-author">
	                                Ethan H.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Fast delivery. Burrito was delicious. Only down side was the ordering menu. Did not give me many options for add-ons. Definitely comparable to Gordo.
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a  class="active" href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/19/17
	                            </div>
	                            <div class="review-item-author">
	                                Diane W.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Reservations are tough to get so I logged on 60 days before we were scheduled
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/18/17
	                            </div>
	                            <div class="review-item-author">
	                                James J.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Ordering from this place is a JOKE 11$ Caesar salad consists of 4 pieces of non
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a class="" href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/20/17
	                            </div>
	                            <div class="review-item-author">
	                                Ethan H.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Fast delivery. Burrito was delicious. Only down side was
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/19/17
	                            </div>
	                            <div class="review-item-author">
	                                Diane W.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Reservations are tough to get so I logged on 60 days before we were scheduled
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/18/17
	                            </div>
	                            <div class="review-item-author">
	                                James J.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Ordering from this place is a JOKE 11$ Caesar salad consists of 4 pieces of non
	                        </div>
	                    </div>
	                </a>
	            </li>                         
	            <li class="row">
	                <a class="" href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/20/17
	                            </div>
	                            <div class="review-item-author">
	                                Ethan H.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Fast delivery. Burrito was delicious. Only down side was
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/19/17
	                            </div>
	                            <div class="review-item-author">
	                                Diane W.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Reservations are tough to get so I logged on 60 days before we were scheduled
	                        </div>
	                    </div>
	                </a>
	            </li>
	            <li class="row">
	                <a href="#">
	                    <div class="review-item-icons">
	                        <i class="material-icons md-18 md-dark md-inactive">reply</i>
	                    </div>
	                    <div class="review-item-details">
	                        <div class="review-item-heading">
	                            <div class="review-item-date float-right">
	                                12/18/17
	                            </div>
	                            <div class="review-item-author">
	                                James J.
	                            </div>
	                        </div>
	                        <div class="review-item-rating">
	                            <i class="material-icons md-18 yellow">star_rate</i>
	                        </div>
	                        <div class="review-item-snippet">
	                            Ordering from this place is a JOKE 11$ Caesar salad consists of 4 pieces of non
	                        </div>
	                    </div>
	                </a>
	            </li>
	        </ul>
	    </div>
	</div>
)

export default ReviewList;