import React, { Component } from "react";
//for material-ui
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MyAwesomeReactComponent from './components/MyAwesomeReactComponent';

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
}

export default App;
