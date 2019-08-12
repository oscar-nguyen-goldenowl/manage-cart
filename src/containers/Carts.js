import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { 
    getProductsSuccess, 
    getProductsError, 
    loading } from '../actions';
import Cart from '../components/cart';
import * as API from '../api';


class Carts extends Component {

    componentDidMount() {
        this.timerProducts = setTimeout(() => {
            API.get('http://localhost:3000/products')
            .then(res => { 
                    this.props.getProductsSuccess(res.data)

                    this.props.loading(false);
                    
                }
            )
            .catch(err => {
                    this.props.getProductsError(err)
                }
            )
        }, 1000)
    }
    componentWillUnmount() {
        this.props.loading(true);
        clearTimeout(this.timerProducts);
    }

    render() {
        return (
            <Fragment>
                {/* <Cart/> */}
                {
                    // (this.state.isloading === false || this.props.error) ?  
                    // <Loading /> : 
                    // JSON.stringify(this.props.products)
                    (this.props.error) ?  this.props.error : JSON.stringify(this.props.products)
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.HomeReducer.products,
        error: state.HomeReducer.error,
        isloading: state.HomeReducer.isloading
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
    loading
}

export default connect( mapStateToProps, mapDispatchToProps )(Carts);