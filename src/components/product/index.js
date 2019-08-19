import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: 0
    }
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
    const {amounts} = this.state;
    const {id, name, url, price} = this.props.product;
    const { product } = this.props;
    return (
        <div className="col-sm-4 mt-4">
            <div className="card">
                <img className="card-img-top" style={{maxWidth: 150, margin: 'auto' }} src={url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <div className="row mb-3 align-items-center">
                        <div className="col-sm-4">
                            <p className="card-text">${price}</p>
                        </div>
                        <div className="col-sm-8">
                            <NavLink to={`/products/${id}/detail`} className="btn btn-secondary ml-2">Detail</NavLink>
                        </div>
                    </div>
                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                        <button onClick={this.decreaseAmount} className="btn btn-info mr-2" style={{width: 40}}>-</button>
                        <input onChange={this.handleChange} value={amounts} className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                        <button onClick={this.increaseAmount} className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                        <button  onClick={() => this.addCart(product)} className="btn btn-warning ml-4">Mua</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Product;