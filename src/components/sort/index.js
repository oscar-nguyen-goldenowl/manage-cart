import React, { Component } from 'react';

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
        this.props.getSortKey(this.state.sort_key);
      }
    );
  }
  render() {
    return (
      <div className="col-sm-3">
        <div className="input-group align-items-center">
          <label style={{ marginBottom: 0 }} className="mr-2">Sort by:</label>
          <select className="custom-select" onChange={this.handleSearch}>
            <option value="asc">ASC</option>
            <option value="desc">DESC</option>
          </select>
        </div>
      </div>
    );
  }
}


export default Sort;