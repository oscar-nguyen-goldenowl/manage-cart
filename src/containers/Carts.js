import React, { Component } from 'react';

import Cart from '../components/cart';
import Pagination from '../components/pagination';

class Carts extends Component {
    render() {
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
                        <Cart/>
                    </tbody>
                </table>
                {/* <Pagination pageNumbers={pageNumbers}  handleClick={this.handleClick}/> */}
            </div>
        );
    }
}

export default Carts;