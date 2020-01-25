import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { StyleRoot } from 'radium';
import './index.css';
import App from './components/App'

ReactDOM.render(
  <StyleRoot>
    <App />
  </StyleRoot>,
  document.getElementById('root')
);

serviceWorker.unregister();
