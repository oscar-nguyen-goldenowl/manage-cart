import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './home/Home';
import ProductCategory from './productCategory/ProductCategory';
import Carts from './Carts/Carts';
import ProductDetail from './productDetail';
import Signin from './signin';
import Signup from './signup';
import Profile from './profile';
import AuthRoute from './AuthRoute';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="home" />
          </Route>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/products/:slug" component={ProductCategory} />
          <Route exact path="/products/:slug/detail" component={ProductDetail} />
          <AuthRoute exact path="/:user/cart" component={Carts} />
          <AuthRoute exact path="/:user/profile" component={Profile} />
        </Switch>
      </Fragment>
    );
  }
}

export default Routes;