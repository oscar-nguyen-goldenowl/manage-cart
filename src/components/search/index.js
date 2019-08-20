import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  getSearchKey
} from '../../actions';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search_name: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({
      search_name: event.target.value
    });
  }

  render() {
    const {search_status} = this.props;
    return (
      search_status ? <div className="container mt-4">
                          <div className="input-group">
                            <input type="text" className="form-control" placeholder="search key..."/>
                            <div className="input-group-append">
                              <button className="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                          </div>
                        </div>
                    : ""
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search_status: state.SearchReducer.search_status
  }
}

export default connect( mapStateToProps )(Search);