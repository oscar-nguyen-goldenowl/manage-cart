import React, { Component } from 'react';
import {connect} from 'react-redux';
import Product from '../components/product';
import * as API from '../api';
import { 
    getProductCategorySuccess, 
    getProductCategoryError, 
    resetProductCategory,
    loading } from '../actions';

class ProductCategory extends Component {
    
    componentDidMount() {

        this.props.loading(true);
 
        API.get(`http://localhost:3000/products?categoryId=${this.props.match.params.slug}`)
            .then(res => { 
                this.props.getProductCategorySuccess(res.data);
                this.props.loading(false);  
            })
            .catch(err => this.props.getProductCategoryError(err))   
        
    }
    // take event change params of router
    componentWillReceiveProps(nextProps){
        this.props.loading(true);
        if(nextProps.match.params.slug !== this.props.match.params.slug){
            API.get(`http://localhost:3000/products?categoryId=${nextProps.match.params.slug}`)
            .then(res => { 
                this.props.getProductCategorySuccess(res.data);
                this.props.loading(false);    
            })
            .catch(err => this.props.getProductCategoryError(err))  
        }
    }

    componentWillUnmount(){
        this.props.resetProductCategory();
    }

    render() {
        const { products, error } = this.props;
        return (
            <div className="container">
                <div className="card-deck">
                    <div className="row">
                    {
                        products || error !== "fails" ? 
                        (
                            products.length && products.map(product => {
                                return  <Product key={product.id} product = {product}/>
                            })
                        )  
                        : error
                    }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.ProductReducer.products,
        error: state.ProductReducer.error
    }
  }

const mapDispatchToProps = {
    getProductCategorySuccess,
    getProductCategoryError,
    resetProductCategory,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductCategory);