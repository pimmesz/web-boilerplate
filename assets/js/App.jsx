// import 'bulma/css/bulma.css'
import '../scss/style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Promise from 'promise-polyfill';
import './polyfills';

import Home from './containers/Home.jsx';

document.addEventListener('touchstart', () => {}, true);

// Add Promise polyfill to window
if (window.Promise == null) {
  window.Promise = Promise;
}

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route exact path="/" component={Home} />
        {/* <Route path="/completed" component={Completed} /> */}
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
