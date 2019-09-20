import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import content from './content.json';
import Page from './components/Page/page';

const App = () => {
  return <Page content={content} />;
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement,
);
