import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './home/Home';
import Navigation from './navigation/Navigation';
import ProductCategory from './productCategory/ProductCategory';
import Carts from './Carts/Carts';
import ProductDetail from './productDetail';
import Loading from '../components/loading';
import Signin from '../components/signin';
import Signup from '../components/signup';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Loading/>
                <Navigation/>
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