import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Product from '../components/product';
import Pagination from '../components/pagination';
import * as API from '../api';
import { 
    addCart,
    changeSortStatus,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductCategorySuccess, 
    getProductCategoryError, 
    resetProductCategory,
    loading } from '../actions';

class ProductCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            itemPage: 10
        }
    }

    componentDidMount() {

        this.props.changeSortStatus(true);

        API.get('/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        this.getProductsPagination(this.props.match.params.slug, this.state.currentPage, this.state.itemPage);
    }
    
    // take event change params of router
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.slug !== this.props.match.params.slug){

            this.getProductsPagination(nextProps.match.params.slug, this.state.currentPage, this.state.itemPage);

        }
    }

    componentWillUnmount(){
        this.props.changeSortStatus(false);
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        },() => {
            this.getProductsPagination(this.props.match.params.slug, this.state.currentPage, this.state.itemPage);
        });
    }

    getProductsPagination = (productID, page, limit) => {
        this.props.loading(true);  
        API.get(`/categories/${productID}/products?_page=${page}&_limit=${limit}`)
        .then(res => { 
            this.props.getProductCategorySuccess(res.data.products);
            this.props.getAmountCategories(res.data.totalItems); 
            this.props.loading(false);  
        })
        .catch(err => this.props.getProductCategoryError(err)) 
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

    render() {
        let {categories, products, amounts, error, sort_key, addCart } = this.props; 
      
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(amounts / 10); i++) {
            pageNumbers.push(i);
        }

        this.sortProduct(products, sort_key);

        return (
            <Fragment>
                <div className="container">
                    <div className="card-deck">
                        <h1 className="text-center mt-4" style={{width: '100%'}}>
                          Product by Category &nbsp;
                          {
                            categories && categories.length && categories.find(category => category.id === parseInt(this.props.match.params.slug)).name
                          }
                        </h1>
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
        sort_key: state.SortReducer.sort_key,
        amounts: state.ProductReducer.amounts,
        products: state.ProductReducer.products,
        categories: state.ProductReducer.categories,
        error: state.ProductReducer.error
    }
  }

const mapDispatchToProps = {
    addCart,
    changeSortStatus,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductCategorySuccess,
    getProductCategoryError,
    resetProductCategory,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductCategory);