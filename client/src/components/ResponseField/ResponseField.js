import React from "react";
import "./ResponseField.css";
import TextField from "material-ui/TextField";
import _ from 'lodash';


class ResponseField extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: "loading response"
    };

    this.loadResponse();

  }

  loadResponse = () => {
  	this.setState({
      value: this.props.value,
    });
  }

  handleChange = (event) => {
    this.setState({
      value: this.props.value,
    });
  };

	render() {
		//only call the handle change function at most every 300 ms
		const handleChange = _.debounce( () => {this.handleChange()}, 300)
		console.log("props.value:", this.props.value);
		return (

			<div>

				<TextField
					multiLine={true}
					fullWidth={true}
					id="text-field-controlled"
					value={this.state.value}
					onChange={handleChange}
				/>
			</div>
		);
	}
}

export default ResponseField;
