import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/products/1" className="dropdown-item">product 1</Link>
                                <Link to="/products/2" className="dropdown-item">product 2</Link>
                                <Link to="/products/3" className="dropdown-item">product 3</Link>
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <Link to="/login" className="btn btn-outline-primary my-2 my-sm-0 text-white">Login</Link>
                        <Link to="/" className="btn btn-outline-primary my-2 my-sm-0 ml-4 text-white">Logout</Link>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navigation;