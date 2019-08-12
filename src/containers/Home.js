import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    getProductsSuccess, 
    getProductsError, 
    resetProducts,
    loading } from '../actions';
import * as API from '../api';


class Home extends Component {

    componentDidMount() {

        this.props.loading(true);
        this.timerProducts = setTimeout(() => {
            API.get('http://localhost:3000/products')
            .then(res => { 
                    this.props.getProductsSuccess(res.data)

                    this.props.loading(false);
                    
                }
            )
            .catch(err => {
                    this.props.getProductsError("fails")
                }
            )
        }, 1000)
        
    }
    componentWillUnmount() {
        clearTimeout(this.timerProducts);
        this.props.resetProducts();
    }

    render() {

        return (
            <Fragment>
                {
                    (this.props.error || this.props.products.length === 0) ?  
                    this.props.error : 
                    JSON.stringify(this.props.products)
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.HomeReducer.products,
        error: state.HomeReducer.error,
        // isloading: state.HomeReducer.isloading
    }
  }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//        listProducts: (pagination) => dispatch(getProducts(pagination)),
//        parseData: () => dispatch(parseData())
//     }
//   }
const mapDispatchToProps = {
    getProductsSuccess,
    getProductsError,
    resetProducts,
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Home);