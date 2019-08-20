import React, { Component, Fragment } from 'react';
import Sort from '../../components/sort';
import Search from '../../components/search';
import { connect } from 'react-redux';
import { 
    addCart,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountProduct,
    getProductsSuccess, 
    getProductsError, 
    resetProducts,
    loading } from '../../actions';
import * as API from '../../api';

import Product from '../../components/product';
import Pagination from '../../components/pagination';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemPage: 10,
            sort_key: '',
            search_key: ''
        }
    }
    
    componentDidMount() {
    
        API.get('/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        API.get('/products/count')
        .then(res => this.props.getAmountProduct(res.data))
        .catch(err => err) 

        this.getProductsPagination(this.state.currentPage, this.state.itemPage);  
    }
    componentWillUnmount() {
        this.props.resetProducts();
    }

    handleClick = (event) => {

        event.preventDefault();

        // // selected for pagination : start
        // let tagAllPagination = event.target.parentElement.parentElement.childNodes;
        // let prevPagination = event.target.parentElement;      
        
        // tagAllPagination.forEach(tag => {
        //   tag.classList.remove('active-pagination')
        // });

        // prevPagination.classList.toggle('active-pagination')

        // // selected for pagination : end

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

    getSortKey = (sort_key) => {      
      this.setState({
        sort_key
      });
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
            return products;
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
          return products;
        }

        return products;
    }

    getSearchKey = (search_key) => {    
      this.setState({
        search_key
      });
    }

    searchProduct = (products, search_key) => {
      return (products || []).reduce((result, prod) => prod.name.toLowerCase().match(search_key.toLowerCase()) ? [...result, prod] : [...result], []);
    }

    render() {
        let { products, amounts, error, addCart } = this.props;
        const {sort_key, search_key, itemPage} = this.state;
              

        // products bt search
        products = this.searchProduct(products, search_key)

        // products bt sort
        products =  this.sortProduct(products, sort_key);

        return (
            <Fragment>
              <div className="container mt-4">
                <div className="row">
                  <Sort getSortKey = {this.getSortKey}/>
                  <Search getSearchKey = {this.getSearchKey}/>
                </div>
              </div>
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
                  <Pagination amountProducts={amounts} itemPage = {itemPage} handleClick={this.handleClick}/>
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
    addCart,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountProduct,
    getProductsSuccess,
    getProductsError,
    resetProducts,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);