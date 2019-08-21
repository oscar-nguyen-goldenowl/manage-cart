import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../../components/cart';

import {
  deleteCart,
  payCart,
  getAmounts
} from '../../actions';


class Carts extends Component {
  render() {
    const { totalPrice, carts, getAmounts, deleteCart, payCart } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">Giỏ hàng</h1>
        <table className="table mt-4">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Thành tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              carts && carts.length ? carts.map(cart => <Cart
                key={cart.product.id}
                cart={cart}
                getAmounts={getAmounts}
                deleteCart={deleteCart} />) : null
            }
            <tr>
              <td colSpan={6} style={{ verticalAlign: 'middle' }} className="text-right">
                <span>Total: {totalPrice}</span>
                <button onClick={payCart} className="btn btn-info ml-4">Thanh toán</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    carts: state.CartReducer.carts,
    totalPrice: state.CartReducer.totalPrice
  }
}

const mapDispatchToProps = {
  deleteCart,
  payCart,
  getAmounts
}

export default connect(mapStateToProps, mapDispatchToProps)(Carts);
