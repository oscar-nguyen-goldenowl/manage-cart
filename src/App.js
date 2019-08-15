import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import Navigation from './containers/Navigation';
import ProductCategory from './containers/ProductCategory';
import Loading from './components/loading';
import Signin from './components/signin';
import Signup from './components/signup';
import ErrorBoundary from './components/errorBoundary';

import "./App.css";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation/>
          <Loading/>
          <ErrorBoundary>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products/:slug" component={ProductCategory}/>
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup}/>
          </ErrorBoundary>
        </Router>
      </Fragment>
    );
  }
}

export default App;