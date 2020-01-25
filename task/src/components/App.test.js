import React from 'react';
import ReactDOM from 'react-dom';
import { StyleRoot } from 'radium';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <StyleRoot>
      <App />
    </StyleRoot>,
  div
);
  ReactDOM.unmountComponentAtNode(div);
});
