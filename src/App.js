import React, { Fragment, Component } from 'react';
import Home from './containers/Home';
import Navigation from './containers/Navigation';


class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation/>
        <Home/>
      </Fragment>
    );
  }
}

export default App;