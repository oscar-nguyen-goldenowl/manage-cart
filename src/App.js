import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import Cart from './containers/Cart';
import Navigation from './containers/Navigation';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Cart}/>
        </Router>
      </Fragment>
    );
  }
}

export default App;