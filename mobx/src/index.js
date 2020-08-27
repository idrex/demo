import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import UserStore from './stores/user'
import './index.css';
import App from './App';
import User from './components/user'
import * as serviceWorker from './serviceWorker';


const store = {
  user: UserStore
}

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <Route exact path='/' component={App} />
      <Route exact path='/user' component={User} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
