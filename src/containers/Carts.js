import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getProductsSuccess, getProductsError } from '../actions';
import Cart from '../components/cart';
import * as API from '../api';
import Loading from '../components/loading';

class Carts extends Component {
    componentDidMount() {
        API.get('http://localhost:3000/products')
            .then(res => this.props.getProductsSuccess(res.data))
            .catch(err => this.props.getProductsError(err))
        // API.erase('http://localhost:3000/products/4')
        //     .then(res => {
        //         API.get('http://localhost:3000/products')
        //         .then(res => this.props.getProductsSuccess(res.data))
        //         .catch(err => this.props.getProductsError(err))
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }
    render() {
        return (
            <Fragment>
                {/* <Cart/> */}
                {
                    (this.props.products  && !this.props.error) ? 
                    JSON.stringify(this.props.products) : 
                    <Loading/>
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.HomeReducer.products,
        error: state.HomeReducer.error
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
    getProductsError
}

export default connect( mapStateToProps, mapDispatchToProps )(Carts);