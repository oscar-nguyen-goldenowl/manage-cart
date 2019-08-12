import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import Navigation from './containers/Navigation';
import DetailCart from './containers/DetailCart';
// import Login from './components/login';
// import Error from './components/error';
import Loading from './components/loading';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation/>
          <Loading/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/:slug" component={DetailCart}/>
        </Router>
      </Fragment>
    );
  }
}

export default App;