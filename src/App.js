import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Routes from './containers/Routes';
import ErrorBoundary from './components/errorBoundary';

import "./App.css";


class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <ErrorBoundary>
            <Routes/>
          </ErrorBoundary>
        </Router>
      </Fragment>
    );
  }
}

export default App;