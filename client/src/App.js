import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Review from "./components/Review";
import ReviewList from "./components/ReviewList";
import { Container } from "./components/Grid";

const App = () => (
  <div>
    <ReviewList/>
    <Review/>
  </div>
  //<Router>
        //<Route exact path="/" component={Review} />
        //<Route exact path="/" component={ReviewList} />
  //</Router>
);

export default App;
