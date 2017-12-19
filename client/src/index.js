import React from 'react';
import ReactDOM from 'react-dom';
//for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'; 
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//for material-ui
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
