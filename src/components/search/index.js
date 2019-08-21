import React, { Component } from 'react';

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
    },
      () => {
        this.props.getSearchKey(this.state.search_name);
      });
  }

  render() {
    const { search_name } = this.state;

    return (
      <div className="col-sm-9" style={{ margin: 0, padding: 0 }}>
        <div className="input-group">
          <input onChange={this.handleChange} value={search_name} type="text" className="form-control" placeholder="search key..." />
        </div>
      </div>
    );
  }
}

export default Search;