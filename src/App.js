import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './containers/Routes';
import ErrorBoundary from './components/errorBoundary';
import Loading from './components/loading';
import Navigation from './containers/navigation/Navigation';

import "./App.css";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <ErrorBoundary>
            <Loading />
            <Navigation />
            <Routes/>
          </ErrorBoundary>
        </Router>
      </Fragment>
    );
  }
}


export default App;