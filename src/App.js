import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import Carts from './containers/Carts';
import Navigation from './containers/Navigation';
// import Login from './components/login';
// import Error from './components/error';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/cart" component={Carts}/>
          {/* <Route exact path="/login" component={Login}/> */}
          {/* <Route component={Error}/> */}
        </Router>
      </Fragment>
    );
  }
}

export default App;