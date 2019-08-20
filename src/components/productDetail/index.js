import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as API from '../../api';
import {
    addCart,
    getProductDetailSuccess,
    getProductDetailError
} from '../../actions';

import "./detail.css";

class ProductDetail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nameCategory: '',
        amounts: 0
      }
    }
    componentDidMount(){        
        API.get(`/products/${this.props.match.params.slug}`)
            .then(res => {
              this.props.getProductDetailSuccess(res.data)    
              API.get(`/categories/${res.data.categoryId}`)
                .then(res => {
                  this.setState({
                    nameCategory: res.data.name
                  });
                })
                .catch(err => err)
            })
            .catch(err => this.props.getProductDetailError(err))
    }


    handleChange = (event) => {
      this.setState({
        amounts: event.target.value
      }, 
      () => {
        if(isNaN(this.state.amounts)){
          this.setState({
            amounts: 0
          });  
        }
      });
    }
  
    increaseAmount = () => {
      this.setState({
        amounts: this.state.amounts + 1
      });
    }
    decreaseAmount = () => {
      this.state.amounts !== 0 ? this.setState({amounts: this.state.amounts - 1}) : this.setState({amounts: 0})
    }

    addCart = (product) => {
      const cart = {
        id: product.id,
        product,
        amounts: this.state.amounts
      }
      if(this.state.amounts !== 0){
        this.props.addCart(cart);
      }else{
        alert("Số lượng phải > 0")
        return;
      }
    }

    render() {
        const {product} = this.props;
        const {name, price, des, url} = this.props.product;
        const {amounts} = this.state;
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
                          <li>
                            {
                              this.state.nameCategory
                            }
                          </li>
                          <li>{des}</li>
                        </ul>
                        <hr className="my-4"/>
                        <div className="amount">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                                        <button onClick={this.decreaseAmount} className="btn btn-info mr-2" style={{width: 40}}>-</button>
                                        <input onChange={this.handleChange} value={amounts} className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                                        <button onClick={this.increaseAmount} className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                                        <button onClick={() => this.addCart(product)} className="btn btn-warning ml-4">Mua</button>
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
      product: state.ProductDetailReducer.product,
      categories: state.ProductReducer.categories,
    }
  }

const mapDispatchToProps = {
    addCart,
    getProductDetailSuccess,
    getProductDetailError
}

export default connect( mapStateToProps, mapDispatchToProps )(ProductDetail);