import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Sidebar from "./components/Sidebar";
import Inbox from "./pages/Inbox";
import StaticContainer from "./components/StaticContainer";

const App = () => (
	<Router>
	<div>
		<Sidebar />
		<Switch>
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/settings" component={Settings} />
			<Route exact path="/inbox" component={Inbox} />
			<Route name="signup" exact path="/signup" component={StaticContainer} />
		</Switch>
	</div>
	</Router>
);

export default App;
