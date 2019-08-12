import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// import axios from 'axios';
import Carts from './Carts';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Carts/>
            </Fragment>
        );
    }
}


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//        listProducts: (pagination) => dispatch(getProducts(pagination)),
//        parseData: () => dispatch(parseData())
//     }
//   }


export default Home;