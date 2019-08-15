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

        API.get('http://localhost:3000/products')
        .then(res => this.props.getAmountProduct(res.data))
        .catch(err => err) 

        this.props.loading(true);

        API.get(`http://localhost:3000/products?_page=${this.state.currentPage}&_limit=${this.state.itemPage}`)
            .then(res => { 

                this.props.getProductsSuccess(res.data)

                this.props.loading(false);
                    
            })
            .catch(err => this.props.getProductsError(err))    
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
            this.props.loading(true);  
            API.get(`http://localhost:3000/products?_page=${this.state.currentPage}&_limit=${this.state.itemPage}`)
            .then(res => { 
                this.props.getProductsSuccess(res.data)
                this.props.loading(false);  
            })
            .catch(err =>  this.props.getProductsError(err))
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
                        <a className="page-link" href="/" id={number} onClick={this.handleClick}>{number}</a>
                    </li>
        })
        return (
            <Fragment>
                <div className="container">
                    <div className="card-deck">
                        <div className="row">
                        {
                            products || error !== "fails" ? 
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
                                <a id='1' onClick={this.handleClick} className="page-link" href="/" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            {renderPageNumbers}
                            <li className="page-item">
                                <a id={pageNumbers[pageNumbers.length - 1]} onClick={this.handleClick} className="page-link" href="/" aria-label="Next">
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