import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./pages/Main";       //DELETE ME
import NoMatch from "./pages/NoMatch"; //DELETE ME
import Nav from "./components/Nav";    //DELETE ME

import API from "./utils/API";
import Review from "./components/Review";
import ReviewList from "./components/ReviewList";
import { Container } from "./components/Grid";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
//		this.loadReviews(); 
	}

	// loadReviews() {
	// 	API.getReviews()
	// 		.then(res =>
	// 			this.setState({
	// 				reviews: res.data
	// 			})
	// 		)
	// 		.catch(err => console.log(err));
	// }

	render() {
		return (
			<div>
				<ReviewList />
				<Review />
			</div>
		);
	}
}
export default App;
