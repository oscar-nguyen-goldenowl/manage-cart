import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    addCart,
    getSearchKey,
    changeSearchStatus,
    changeSortStatus,
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

        this.props.changeSortStatus(true);
        this.props.changeSearchStatus(true);
    
        API.get('/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        API.get('/products/count')
        .then(res => this.props.getAmountProduct(res.data))
        .catch(err => err) 

        this.getProductsPagination(this.state.currentPage, this.state.itemPage);  
    }
    componentWillUnmount() {
        this.props.changeSortStatus(false);
        this.props.changeSearchStatus(false);
        this.props.getSearchKey("");
        this.props.resetProducts();
    }

    handleClick = (event) => {

        event.preventDefault();

        // selected for pagination : start
        let tagAllPagination = event.target.parentElement.parentElement.childNodes;
        let prevPagination = event.target.parentElement;      
        
        tagAllPagination.forEach(tag => {
          tag.classList.remove('active')
        });

        prevPagination.classList.toggle('active')

        // selected for pagination : end

        this.setState({
            currentPage: Number(event.target.id)
        }, 
        () => {
            this.getProductsPagination(this.state.currentPage, this.state.itemPage);
        });
    }

    getProductsPagination = (page, limit) => {
        this.props.loading(true);  
        API.get(`/products?_page=${page}&_limit=${limit}`)
        .then(res => { 
            this.props.getProductsSuccess(res.data)
            this.props.loading(false);  
        })
        .catch(err =>  this.props.getProductsError(err))
    }

    sortProduct = (products, sort_key) => {
        if(sort_key === 'asc'){
            products.sort((prevProduct, nextProduct)  => {
                if (prevProduct.iat < nextProduct.iat) {
                  return -1;
                }
                if (prevProduct.iat > nextProduct.iat) {
                  return 1;
                }
                return 0;
              });
        }

        if(sort_key === 'desc'){
            products.sort((prevProduct, nextProduct)  => {
                if (prevProduct.iat > nextProduct.iat) {
                  return -1;
                }
                if (prevProduct.iat < nextProduct.iat) {
                  return 1;
                }
                return 0;
              }); 
        }
    }

    searchProduct = (products, search_key) => {
      const tempProducts = [];
      products && products.length && products.forEach(product => {
        if(product.name.match(search_key)){
          tempProducts.push(product);
        }
      });
      return tempProducts;
    }

    render() {
        let { products, amounts, error, sort_key, search_key, addCart } = this.props;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(amounts / 10); i++) {
            pageNumbers.push(i);
        }
        
        this.sortProduct(products, sort_key);

        if(this.searchProduct(products, search_key && this.searchProduct(products, search_key))){
          products = this.searchProduct(products, search_key) 
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
                                    return <Product key={product.id} product = {product} addCart = {addCart}/>
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
        search_key: state.SearchReducer.search_key,
        sort_key: state.SortReducer.sort_key,
        products: state.HomeReducer.products,
        amounts: state.HomeReducer.amounts,
        error: state.HomeReducer.error,
    }
  }

const mapDispatchToProps = {
    addCart,
    getSearchKey,
    changeSearchStatus,
    changeSortStatus,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountProduct,
    getProductsSuccess,
    getProductsError,
    resetProducts,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);