import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import Product from '../components/product';
import * as API from '../api';
import { 
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

        API.get('http://localhost:3000/categories')
            .then(res => this.props.getCategoriesSuccess(res.data))
            .catch(err => this.props.getCategoriesError(err)) 

        this.props.loading(true);
 
        API.get(`http://localhost:3000/categories/${this.props.match.params.slug}/products?_page=${this.state.currentPage}&_limit=${this.state.itemPage}`)
        .then(res => { 
            this.props.getProductCategorySuccess(res.data.products);
            this.props.getAmountCategories(res.data.totalItems); 
            this.props.loading(false);  
        })
        .catch(err => this.props.getProductCategoryError(err)) 
    }
    
    // take event change params of router
    componentWillReceiveProps(nextProps){
        if(nextProps.match.params.slug !== this.props.match.params.slug){

            this.props.loading(true);
            
            API.get(`http://localhost:3000/categories/${this.props.match.params.slug}/products?_page=${this.state.currentPage}&_limit=${this.state.itemPage}`)
            .then(res => { 
                this.props.getProductCategorySuccess(res.data.products);
                this.props.getAmountCategories(res.data.totalItems); 
                this.props.loading(false);  
            })
            .catch(err => this.props.getProductCategoryError(err)) 
        }
    }

    componentWillUnmount(){
        this.props.resetProductCategory();
    }

    handleClick = (event) => {
        event.preventDefault();
        this.setState({
            currentPage: Number(event.target.id)
        },() => {
            this.props.loading(true);  
            API.get(`http://localhost:3000/categories/${this.props.match.params.slug}/products?_page=${this.state.currentPage}&_limit=${this.state.itemPage}`)
            .then(res => { 
                this.props.getProductCategorySuccess(res.data.products);
                this.props.getAmountCategories(res.data.totalItems); 
                this.props.loading(false);  
            })
            .catch(err => this.props.getProductCategoryError(err)) 
        });
    }

    render() {
        const {products, amounts, error } = this.props; 
        
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(amounts / 10); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return  <li className="page-item" key={number}>
                        <a className="page-link" href="#" id={number} onClick={this.handleClick}>{number}</a>
                    </li>
        })
        return (
            <Fragment>
                <div className="container">
                    <div className="card-deck">
                        <div className="row">
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
                    <nav aria-label="Page navigation example" style={{marginTop: 50}}>
                        <ul className="pagination" style={{justifyContent: 'center'}}>
                            <li className="page-item">
                                <a id='1' onClick={this.handleClick} className="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {renderPageNumbers}
                            <li className="page-item">
                                <a id={pageNumbers[pageNumbers.length - 1]} onClick={this.handleClick} className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only" >Next</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        amounts: state.ProductReducer.amounts,
        products: state.ProductReducer.products,
        error: state.ProductReducer.error
    }
  }

const mapDispatchToProps = {
    getCategoriesSuccess,
    getCategoriesError,
    getAmountCategories,
    getProductCategorySuccess,
    getProductCategoryError,
    resetProductCategory,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductCategory);