import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('renders', () => {
  const root = document.createElement('div');

  ReactDOM.render(<App />, root);
  ReactDOM.unmountComponentAtNode(root);
});
