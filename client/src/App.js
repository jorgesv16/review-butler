import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Inbox from "./pages/Inbox";

const App = () => (
	<Router>
	<div>
		<Sidebar />
		<Switch>
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/settings" component={Settings} />
			<Route exact path="/inbox" component={Inbox} />
		</Switch>
	</div>
	</Router>
);

export default App;
