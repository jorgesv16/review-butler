import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div className="float-md-left">
          <div className="dashboard-container full-height">Insert Settings</div>
        </div>
      </div>
    );
  }
}

export default Inbox;
