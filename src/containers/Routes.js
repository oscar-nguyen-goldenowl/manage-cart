import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import Navigation from '../containers/Navigation';
import ProductCategory from '../containers/ProductCategory';
import Loading from '../components/loading';
import Signin from '../components/signin';
import Signup from '../components/signup';
import ProductDetail from '../components/productDetail';

class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Navigation/>
                <Loading/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/">
                        <Redirect to="home"/>
                    </Route>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/products/:slug" component={ProductCategory}/>
                    <Route exact path="/products/:slug/detail" component={ProductDetail}/>
                </Switch>
            </Fragment>
        );
    }
}

export default Routes;