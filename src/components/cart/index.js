import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amounts: 0
    }
  }

  componentDidMount() {
    this.setState({
      amounts: this.props.cart.amounts
    });
  }

  handleChange = (event) => {
    this.setState({
      amounts: event.target.value
    },
      () => {

        if (isNaN(this.state.amounts)) {
          this.setState({
            amounts: 0
          });
        }
        this.props.getAmounts(this.props.cart.id, +this.state.amounts)
      });
  }

  increaseAmount = () => {
    this.setState(
      { amounts: this.state.amounts + 1 },
      () => this.props.getAmounts(this.props.cart.id, this.state.amounts)
    );
  }

  decreaseAmount = () => {
    if (+this.state.amounts === 1 || +this.state.amounts < 1 || isNaN(this.state.amounts)) {
      this.setState({
        amounts: 1
      });
    }
    else {
      this.setState(
        {
          amounts: this.state.amounts - 1
        },
        () => this.props.getAmounts(this.props.cart.id, this.state.amounts)
      );
    }
  }

  render() {
    const { product } = this.props.cart;
    const { deleteCart } = this.props;
    const { amounts } = this.state;

    return (
      <tr>
        <th scope="row" style={{ verticalAlign: 'middle' }}>{product.id}</th>
        <td style={{ verticalAlign: 'middle' }}>{product.name}</td>
        <td style={{ verticalAlign: 'middle' }}>{product.price}</td>
        <td style={{ verticalAlign: 'middle' }}>
          <div className="form-group d-flex align-items-center" style={{ marginBottom: 0 }}>
            <button onClick={this.decreaseAmount} className="btn btn-default mr-2" style={{ width: 40 }}>-</button>
            <input onChange={this.handleChange} value={this.state.amounts} className="form-control text-center" type="text" placeholder="0" style={{ width: 70, display: 'inline-block' }} />
            <button onClick={this.increaseAmount} className="btn btn-default ml-2" style={{ width: 40 }}>+</button>
          </div>
        </td>
        <td style={{ verticalAlign: 'middle' }}>${product.price * amounts}</td>
        <td style={{ verticalAlign: 'middle' }}>
          <button onClick={() => deleteCart(product.id)} className="btn btn-danger ml-2">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Cart;