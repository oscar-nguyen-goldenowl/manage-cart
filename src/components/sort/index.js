import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  getValueSort
} from '../../actions';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sort_key: ''
        }
    }
    
    handleSearch = (event) => {
        this.setState({
          sort_key: event.target.value
        },
            () => {
                this.props.getValueSort(this.state.sort_key);
            }
        );
    }
    render() {
        const { sort_status } = this.props;
        return (
          sort_status ?
                <div className="col-sm-6">
                  <div className="input-group align-items-center">
                      <label style={{marginBottom: 0}} className="mr-2">Sort by:</label>
                      <select className="custom-select" onChange={this.handleSearch}>
                          <option value="asc">ASC</option>
                          <option value="desc">DESC</option>
                      </select>
                  </div>
                </div>
            : ""
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      sort_status: state.SortReducer.sort_status
    }
}

const mapDispatchToProps = {
    getValueSort
}

export default connect( mapStateToProps, mapDispatchToProps )(Sort);