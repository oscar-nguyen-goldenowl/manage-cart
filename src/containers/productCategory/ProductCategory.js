import React, { Component, Fragment } from 'react';
import Sort from '../../components/sort';
import Search from '../../components/search';
import {connect} from 'react-redux';
import Product from '../../components/product';
import Pagination from '../../components/pagination';
import * as API from '../../api';
import { 
    addCart,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductCategorySuccess, 
    getProductCategoryError, 
    resetProductCategory,
    loading } from '../../actions';

class ProductCategory extends Component {
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

        this.getProductsPagination(this.props.match.params.slug, this.state.currentPage, this.state.itemPage);
    }
    
    // take event change params of router
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.slug !== this.props.match.params.slug){

          this.getProductsPagination(nextProps.match.params.slug, this.state.currentPage, this.state.itemPage);

        }
    }

    handleClick = (event) => {
        event.preventDefault();

        // selected for pagination : start
        let tagAllPagination = event.target.parentElement.parentElement.childNodes;
        let prevPagination = event.target.parentElement;      
        
        tagAllPagination.forEach(tag => {
          tag.classList.remove('active-pagination')
        });

        prevPagination.classList.toggle('active-pagination')
        // selected for pagination : end

        
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

    getSearchKey = (search_key) => {    
      this.setState({
        search_key
      });
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
        let {categories, products, amounts, error, addCart } = this.props; 
        const {sort_key, search_key} = this.state;

        this.sortProduct(products, sort_key);

        if(this.searchProduct(products, search_key && this.searchProduct(products, search_key))){
          products = this.searchProduct(products, search_key) 
        }

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
                  <Pagination amountProducts={amounts}  handleClick={this.handleClick}/>
              </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        amounts: state.ProductReducer.amounts,
        products: state.ProductReducer.products,
        categories: state.ProductReducer.categories,
        error: state.ProductReducer.error
    }
  }

const mapDispatchToProps = {
    addCart,
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductCategorySuccess,
    getProductCategoryError,
    resetProductCategory,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductCategory);