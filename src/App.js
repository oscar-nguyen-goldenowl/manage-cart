import React, { Fragment, Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './containers/Home';
import Navigation from './containers/Navigation';
import ProductCategory from './containers/ProductCategory';
import Loading from './components/loading';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navigation/>
          <Loading/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/products/:slug" component={ProductCategory}/>
        </Router>
      </Fragment>
    );
  }
}

export default App;