import React from 'react';
import { StyleRoot } from 'radium';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer'

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


test("snapshot testing",()=>{
  const component=renderer.create(
    <StyleRoot>
      <App />
    </StyleRoot>
  );
  let tree=component.toJSON();
  expect(tree).toMatchSnapshot();

})

