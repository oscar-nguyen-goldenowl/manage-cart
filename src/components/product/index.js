import React from 'react';

const Product = (props) => {
    const {name, url, price} = props.product;
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
                            <button className="btn btn-secondary ml-2">Detail</button>
                        </div>
                    </div>
                    <div className="form-group d-flex align-items-center" style={{marginBottom: 0}}>
                        <button className="btn btn-info mr-2" style={{width: 40}}>-</button>
                        <input className="form-control" type="text" placeholder="0" style={{width: 70, display: 'inline-block'}}/>
                        <button className="btn btn-primary ml-2" style={{width: 40}}>+</button>
                        <button className="btn btn-warning ml-4">Mua</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;