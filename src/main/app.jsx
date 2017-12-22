import React, { Component } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../main/reducers';

import routes from './routes';

import 'npm-font-open-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';

import './app.scss';

const store = applyMiddleware()(createStore)(reducers);

export default class App extends Component {

  constructor() {
    super();
    this.routes = routes;
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            {
              this.routes
            }
          </div>
        </Router>
      </Provider>
    );
  }
}