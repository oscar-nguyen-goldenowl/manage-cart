import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <tr>
                <th scope="row" style={{verticalAlign: 'middle'}}>1</th>
                <td style={{verticalAlign: 'middle'}}>Mark</td>
                <td style={{verticalAlign: 'middle'}}>$1000</td>
                <td style={{verticalAlign: 'middle'}}>
                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                        <button className="btn btn-default mr-2" style={{width: 40}}>-</button>
                        <input className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                        <button className="btn btn-default ml-2" style={{width: 40}}>+</button>
                    </div>
                </td>
                <td style={{verticalAlign: 'middle'}}>$1000</td>
                <td style={{verticalAlign: 'middle'}}>
                    <button className="btn btn-info">Thanh toán</button>
                    <button className="btn btn-danger ml-2">Delete</button>
                </td>
            </tr>
        );
    }
}

export default Cart;