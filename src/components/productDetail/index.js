import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as API from '../../api';
import {
    getProductDetailSuccess,
    getProductDetailError
} from '../../actions';

import "./detail.css";

class ProductDetail extends Component {
    componentDidMount(){
        
        API.get(`http://localhost:3000/products/${this.props.match.params.slug}`)
            .then(res => this.props.getProductDetailSuccess(res.data))
            .catch(err => this.props.getProductDetailError(err))
    }
    render() {
        const {name, price, des, url} = this.props.product;
        
        return (
            <div className="detail">
                <div className="row">
                    <div className="col-sm-5">
                        <img src={url} alt="oscar"/>
                    </div>
                    <div className="col-sm-7">
                        <h2>{name}</h2>
                        <hr className="my-4"/>
                        <p>Price : {price}</p>
                        <ul className="description">
                            <li>{des}</li>
                        </ul>
                        <hr className="my-4"/>
                        <div className="amount">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                                        <button className="btn btn-info mr-2" style={{width: 40}}>-</button>
                                        <input className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                                        <button className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                                        <button className="btn btn-warning ml-4">Mua</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.ProductDetailReducer.product
    }
  }

const mapDispatchToProps = {
    getProductDetailSuccess,
    getProductDetailError
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductDetail);