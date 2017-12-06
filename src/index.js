import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './component/App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Router, Link, Route, Switch } from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

let routes = (
  <Router>
    <Route name="home" path="./compents/Home" component={Home} />
    <Route name="signIn" path="./component/SignIn" component={SignIn} />
  </Router>
)
