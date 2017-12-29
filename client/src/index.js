import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import Store from './store';
import AppState from './AppState.jsx';

// ReactDOM.render(<App />, document.getElementById("root"));

const renderApp = (Component) => {
  render(
    <AppContainer>
    <Provider store={Store}>
      <Component/>
    </Provider>
  </AppContainer>, document.querySelector('#root'),);
};

renderApp(AppState);
