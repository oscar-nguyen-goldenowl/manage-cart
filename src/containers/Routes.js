import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import Navigation from './Navigation';
import ProductCategory from './ProductCategory';
import Carts from './Carts';
import Loading from '../components/loading';
import Signin from '../components/signin';
import Signup from '../components/signup';
import ProductDetail from '../components/productDetail';
import Sort from '../components/sort';
import Search from '../components/search';


class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Navigation/>
                <Sort/>
                <Loading/>
                <Search/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/">
                        <Redirect to="home"/>
                    </Route>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/products/:slug" component={ProductCategory}/>
                    <Route exact path="/products/:slug/detail" component={ProductDetail}/>
                    <Route exact path="/:user/cart" component={Carts}/>
                </Switch>
            </Fragment>
        );
    }
}

export default Routes;