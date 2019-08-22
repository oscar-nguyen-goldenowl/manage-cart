import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as API from '../../api';
import {
  changeLoginStatus,
  getProfileSuccess,
  getProfileError
} from '../../actions';

class Navigation extends Component {

  componentDidMount(){
      // get profile again if Home page refresh after Signin
      if(localStorage.getItem("token")){
      API.get('/profile')
        .then(res => {
          this.props.getProfileSuccess(res.data.user)
        })
        .catch(err => this.props.getProfileSuccess(err))
    }
  }

  handleLogout = () => {
    localStorage.setItem("token", "");
    this.props.changeLoginStatus(!this.props.loginStatus);
    this.props.history.push('/')
  }
  render() {
    const { categories, totalItem, profile } = this.props;
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : "";
    const username = profile ? profile.username : "";
    
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
            <Link to={`/${username ? username : ''}/cart`} className={`btn btn-outline-success my-2 my-sm-0 mr-4 text-white ${token ? "d-inline-block" : ""}`} style={{ border: 'none', display: 'none' }}>
              <i className="fas fa-cart-plus"></i>
              <span className="badge badge-danger" style={{ top: '-10px' }}>{totalItem}</span>
              <span className="sr-only">unread messages</span>
            </Link>
            <Link to="/signin" className={`btn btn-outline-success my-2 my-sm-0 mr-4 text-white ${token ? "d-none" : ""}`} style={{ border: 'none' }} >Sign in</Link>
            <Link to="/signup" className={`btn btn-outline-success my-2 my-sm-0 mr-4 text-white ${token ? "d-none" : ""}`} style={{ border: 'none' }}>Sign up</Link>
            <div className={`nav-item dropdown ${token ? "d-inline-block" : ""}`} style={{ display: 'none' }}>
              <div className="nav-link" style={{ background: '#28a745', borderRadius: '30%', cursor: 'pointer' }} href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-user"></i>
              </div>
              <div className="dropdown-menu" style={{ left: 'auto', right: 0 }} aria-labelledby="navbarDropdown">
                <Link to={`/${username ? username : ''}/profile`} className="dropdown-item">Profile</Link>
                <div className="dropdown-divider"></div>
                <button onClick={this.handleLogout} className="dropdown-item" >Logout</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.ProfileReducer.profile,
    loginStatus: state.AppReducer.loginStatus,
    categories: state.ProductReducer.categories,
    totalItem: state.CartReducer.totalItem
  }
}

const mapDispatchToProps = {
  changeLoginStatus,
  getProfileSuccess,
  getProfileError,
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));