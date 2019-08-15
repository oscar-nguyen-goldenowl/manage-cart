import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    getCategoriesSuccess,
    getCategoriesError,
    getAmountProduct,
    getProductsSuccess, 
    getProductsError, 
    resetProducts,
    loading } from '../actions';
import * as API from '../api';

import Product from '../components/product';
import Pagination from '../components/pagination';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemPage: 10
        }
    }
    
    componentDidMount() {

        API.get('http://localhost:3000/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        API.get('http://localhost:3000/products/count')
        .then(res => this.props.getAmountProduct(res.data))
        .catch(err => err) 

        this.getProductsPagination(this.state.currentPage, this.state.itemPage);  
    }
    componentWillUnmount() {
        this.props.resetProducts();
    }

    handleClick = (event) => {

        event.preventDefault();

        this.setState({
            currentPage: Number(event.target.id)
        }, 
        () => {
            this.getProductsPagination(this.state.currentPage, this.state.itemPage);
        });
    }

    getProductsPagination = (page, limit) => {
        this.props.loading(true);  
        API.get(`http://localhost:3000/products?_page=${page}&_limit=${limit}`)
        .then(res => { 
            this.props.getProductsSuccess(res.data)
            this.props.loading(false);  
        })
        .catch(err =>  this.props.getProductsError(err))
    }

    render() {
        const {products, amounts, error } = this.props; 

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(amounts / 10); i++) {
            pageNumbers.push(i);
        }

        return (
            <Fragment>
                <div className="container">
                    <div className="card-deck">
                        <div className="row" style={{width: '100%'}}>
                        {
                            products && products.length ? 
                            (
                                products.map((product) => {
                                    return <Product key={product.id} product = {product}/>
                                })
                            )  
                            : error
                        }
                        </div>
                    </div>
                    <Pagination pageNumbers={pageNumbers}  handleClick={this.handleClick}/>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.HomeReducer.products,
        amounts: state.HomeReducer.amounts,
        error: state.HomeReducer.error,
    }
  }

const mapDispatchToProps = {
    getCategoriesSuccess,
    getCategoriesError,
    getAmountProduct,
    getProductsSuccess,
    getProductsError,
    resetProducts,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);