// a React Component that includes the header and footer
import React from "react";


import StaticContent from "../../../src/pages/StaticContent";

// use the route name from React Router to request the right data
const StaticContainer = ({ route }) => (
  <div>
    <StaticContent content={route.signup} />
  </div>
);

export default StaticContainer;
