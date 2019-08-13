import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductsSuccess, 
    getProductsError, 
    resetProducts,
    loading } from '../actions';
import * as API from '../api';

import Product from '../components/product';


class Home extends Component {
    
    componentDidMount() {

        API.get('http://localhost:3000/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        this.props.loading(true);

        API.get('http://localhost:3000/products')
            .then(res => { 

                this.props.getProductsSuccess(res.data)

                this.props.getAmountCategories(res.data)

                this.props.loading(false);
                    
            })
            .catch(err => this.props.getProductsError(err))    
    }
    componentWillUnmount() {
        this.props.resetProducts();
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="card-deck">
                        <div className="row">
                        {
                            this.props.products || this.props.error !== "fails" ? 
                            (
                                this.props.products.map(product => {
                                    return  <Product key={product.id} product = {product}/>
                                })
                            )  
                            : this.props.error
                        }
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.HomeReducer.products,
        error: state.HomeReducer.error,
    }
  }

const mapDispatchToProps = {
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductsSuccess,
    getProductsError,
    resetProducts,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);