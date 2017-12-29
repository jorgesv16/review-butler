import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Cover from "./pages/Cover";

// import Sidebar from "./components/Sidebar";
import StaticContainer from "./components/StaticContainer";

const App = () => (
	<Router>
	<div>
		<Switch>
			<Route exact path="/" component={Cover} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/settings" component={Settings} />
			<Route exact path="/inbox" component={Inbox} />
			<Route name="signup" exact path="/signup" component={StaticContainer} />
		</Switch>
	</div>
	</Router>
);

export default App;
