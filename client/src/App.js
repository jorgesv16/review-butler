import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";

const App = () => (
  <Router>
    <div className="container">
      <Container fluid>Insert Review here</Container>
    </div>
  </Router>
);

export default App;
