import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Navigation extends Component {    
    render() {
        const {categories, totalItem} = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
                                    categories && categories.length && categories.map(category => {
                                        return <Link to={`/products/${category.id}`} key={category.id} className="dropdown-item">{category.name}</Link>
                                    })
                                }
                            </div>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                      <Link to="/oscar/cart" className="btn btn-outline-success my-2 my-sm-0 mr-4 text-white" style={{border: 'none'}}>
                        <i className="fas fa-cart-plus"></i>
                        <span className="badge badge-danger" style={{top: '-10px'}}>{totalItem}</span>
                        <span className="sr-only">unread messages</span>
                      </Link>
                      <Link to="/signin" className="btn btn-outline-success my-2 my-sm-0 text-white" style={{border: 'none'}} >Sign in</Link>
                      <Link to="/signup" className="btn btn-outline-success my-2 my-sm-0 ml-4 text-white" style={{border: 'none'}}>Sign up</Link>
                    </div>
                </div>
            </nav>

        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
       categories: state.ProductReducer.categories,
       totalItem: state.CartReducer.totalItem
    }
  }


export default connect( mapStateToProps )(Navigation);