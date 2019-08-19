import React, { Component } from 'react';
import {connect} from 'react-redux';

import {
  getAmounts
} from '../../actions';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: 0
    }
  }

  componentDidMount(){
    this.setState({
      amounts: this.props.cart.amounts
    });
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
    this.setState(
      {amounts: this.state.amounts + 1},
      () => this.props.getAmounts(this.props.cart.id, this.state.amounts)
    );
  }
  
  decreaseAmount = () => {
    this.state.amounts !== 0 ? this.setState(
                                              {amounts: this.state.amounts - 1},
                                              () => this.props.getAmounts(this.props.cart.id, this.state.amounts)
                                            ) : this.setState({amounts: 0})
  }
  
  render() {
    const {product} = this.props.cart;
    const {deleteCart} = this.props;
    const {amounts} = this.state;
    
    return (
        <tr>
            <th scope="row" style={{verticalAlign: 'middle'}}>{product.id}</th>
            <td style={{verticalAlign: 'middle'}}>{product.name}</td>
            <td style={{verticalAlign: 'middle'}}>{product.price}</td>
            <td style={{verticalAlign: 'middle'}}>
                <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                    <button onClick={this.decreaseAmount} className="btn btn-default mr-2" style={{width: 40}}>-</button>
                    <input onChange={this.handleChange} value={this.state.amounts}  className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                    <button onClick={this.increaseAmount} className="btn btn-default ml-2" style={{width: 40}}>+</button>
                </div>
            </td>
            <td style={{verticalAlign: 'middle'}}>${product.price * amounts}</td>
            <td style={{verticalAlign: 'middle'}}>
                <button onClick={() => deleteCart(product.id)} className="btn btn-danger ml-2">Delete</button>
            </td>
        </tr>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = {
  getAmounts
}

export default connect( mapStateToProps, mapDispatchToProps )(Cart);