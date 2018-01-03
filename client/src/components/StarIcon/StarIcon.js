import React from "react";
import "./StarIcon.css";
import classnames from 'classnames';
const StarIcon = props => (
  <i className={classnames('material-icons',props.size)}>star_rate</i>
);

export default StarIcon;
