import React from 'react';

const Product = (props) => {
    const {name, url, price} = props.product;
    return (
        <div className="col-sm-4 mt-4">
            <div className="card">
                <img className="card-img-top" style={{maxWidth: 150, margin: 'auto' }} src={url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${price}</p>
                    <button className="btn btn-info">Mua</button>
                    <button className="btn btn-primary ml-2">Detail</button>
                </div>
            </div>
        </div>
    );
};

export default Product;