import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Inbox from "./pages/Inbox";
import Cover from "./pages/Cover";
import Signup from "./pages/Signup";
import Login from "./pages/Login/LoginContainer.jsx";


// import Sidebar from "./components/Sidebar";

const App = (props) => (
	<Router>
	<div>
		<Switch>
			<Route exact path="/" component={Cover} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/dashboard" component={Dashboard} />
			<Route exact path="/settings" component={Settings} />
			<Route exact path="/inbox" component={Inbox} />

		</Switch>
	</div>
	</Router>
);

export default App;
