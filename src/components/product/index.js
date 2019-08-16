import React from 'react';
import {NavLink} from "react-router-dom";

const Product = (props) => {
    const {id, name, url, price} = props.product;
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
                        <button className="btn btn-info mr-2" style={{width: 40}}>-</button>
                        <input className="form-control text-center" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                        <button className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                        <NavLink to="/oscar/cart" className="btn btn-warning ml-4">Mua</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;