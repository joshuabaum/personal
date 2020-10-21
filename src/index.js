import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeTitleBar from './components/HomeTitleBar';
import HomeBody from './components/HomeBody';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <HomeTitleBar />
    <HomeBody />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
