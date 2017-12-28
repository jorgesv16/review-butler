// a react component to inject the returned html
import React, { Component } from "react";
import "whatwg-fetch";

export default class StaticContent extends Component {
  state = {
    __html: ""
  }

  componentWillMount() {
    // fetch the HTML fragment with a local API request
    fetch(`/template/${this.props.content}`)
      .then(resp => {
        // fetch returns a readable stream, so translate it into stringified HTML
        return resp.text();
      })
      .then(content => {
        // dangerouslySetInnerHTML requires using an object with an `__html` key
        this.setState({
          __html: content
        });
      })
      .catch(err => {
        // handle the error
      });
  }

  render() {
    return (
        <div dangerouslySetInnerHTML={this.state} />
    );
  }
}
