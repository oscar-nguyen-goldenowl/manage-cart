import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import * as API from '../api';
import { 
    getProductCategorySuccess, 
    getProductCategoryError, 
    resetProductCategory,
    loading } from '../actions';


class DetailCart extends Component {

    componentDidMount() {
        this.props.loading(true);
        this.timerProduct = setTimeout(() => {
            API.get('http://localhost:3000/products/6')
            .then(res => { 
                    this.props.getProductCategorySuccess(res.data)
                    this.props.loading(false);
                }
            )
            .catch(err => {
                    this.props.getProductCategoryError("fails")
                }
            )
        }, 1000)
    }
    componentWillUnmount() {
        clearTimeout(this.timerProduct);
        this.props.resetProductCategory();
    }
    
    render() {
        return (
           <Fragment>
                {
                    (this.props.error || JSON.stringify(this.props.product) === JSON.stringify({}) )?  
                    this.props.error : 
                    JSON.stringify(this.props.product)
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
       product: state.ProductReducer.product,
       error: state.ProductReducer.error
    }
  }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//        listProducts: (pagination) => dispatch(getProducts(pagination)),
//        parseData: () => dispatch(parseData())
//     }
//   }
const mapDispatchToProps = {
    getProductCategorySuccess,
    getProductCategoryError,
    resetProductCategory,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(DetailCart);