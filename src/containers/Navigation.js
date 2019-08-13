import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navigation extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    this.props.amounts.map((category, index) => {
                                        return <Link to={`/products/${category}`} key={index} className="dropdown-item">product {category}</Link>
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        <Link to="/signin" className="btn btn-outline-success my-2 my-sm-0" >Sign in</Link>
                        <Link to="/signup" className="btn btn-outline-success my-2 my-sm-0 ml-4" >Sign up</Link>
                    </div>
                </div>
            </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       amounts: state.HomeReducer.amounts
    }
  }


export default connect( mapStateToProps )(Navigation);