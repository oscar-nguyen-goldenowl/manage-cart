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

  componentWillUnmount(){
    this.props.getSearchKey('');
  }
  
  handleChange = (event) => {
    this.setState({
      search_name: event.target.value
    },
    () => {
      this.props.getSearchKey(this.state.search_name);
    });
  }

  render() {
    const {search_key, search_status} = this.props;
    
    return (
      search_status ? <div className="col-sm-9" style={{margin: 0, padding: 0}}>
                          <div className="input-group">
                            <input onChange={this.handleChange} value={search_key} type="text" className="form-control" placeholder="search key..."/>
                          </div>
                        </div>
                    : ""
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    search_key: state.SearchReducer.search_key,
    search_status: state.SearchReducer.search_status
  }
}

const mapDispatchToProps = {
  getSearchKey
}

export default connect( mapStateToProps, mapDispatchToProps )(Search);