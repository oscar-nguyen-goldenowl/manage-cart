import React from 'react';

const Product = (props) => {
    const {name, url} = props.product;
    return (
        <div className="col-sm-4 mt-4">
            <div className="card">
                <img className="card-img-top" src={url} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{name}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    );
};

export default Product;