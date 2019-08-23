import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  changeProfile,
  getProfileSuccess,
  getProfileError
} from "../../actions";
import * as API from '../../api';
import moment from 'moment';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
    }
  }
  
  componentDidMount(){
    API.get('/profile')
        .then(res => {
          this.props.getProfileSuccess(res.data.user)
          this.setState({
            username: res.data.user.username,
            email: res.data.user.email
          });
        })
        .catch(err => this.props.getProfileSuccess(err))
  }

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmitForm = () => {
    const {id, username, email} = this.props.profile;
    if(this.state.username !== username || this.state.email !== email){
      const user = {
        id,
        username: this.state.username,
        email: this.state.email,
      }
      API.put('/profile', user)
        .then(res => {          
          this.props.changeProfile(res.data.user);
          this.props.history.push(`/${user.username}/profile`);
        })
        .catch(err => console.log(err))
    }
  }
  render() {
    const profile = this.props.profile ? this.props.profile : {}; 
    const {username, email} = this.state; 
  
    return (
      <div className="detail">
        <div className="row">
          <div className="col-sm-5">
            <div className="avatar">
              {
                profile.avatar ? <img src={profile.avatar} alt="avatar is not found" /> : <i className="fas fa-user"></i>
              }
            </div>
          </div>
          <div className="col-sm-7">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input onChange={this.handleChange} type="text" value={username} className="form-control" name="username" id="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email: </label>
                <input onChange={this.handleChange} type="email" value={email} className="form-control" name="email" id="email" placeholder="Email" />
              </div>
              <button onClick={this.handleSubmitForm} type="button" className={`btn btn-primary ${username !== profile.username || email !== profile.email ? '' : 'disabled'}`}>Save changes</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.ProfileReducer.profile
  }
}

const mapDispatchToProps = {
  changeProfile,
  getProfileSuccess,
  getProfileError
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);