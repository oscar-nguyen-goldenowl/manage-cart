import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
    getValueSearch
} from '../../actions';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search_key: ''
        }
    }
    
    handleSearch = (event) => {
        this.setState({
            search_key: event.target.value
        },
            () => {
                this.props.getValueSearch(this.state.search_key);
            }
        );
    }
    render() {
        const { search_status } = this.props;
        return (
            search_status ?
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="input-group">
                                <select className="custom-select" onChange={this.handleSearch}>
                                    <option value="default">Sort by ASC or DESC</option>
                                    <option value="asc">ASC</option>
                                    <option value="desc">DESC</option>
                                </select>
                            </div>
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

const mapDispatchToProps = {
    getValueSearch
}

export default connect( mapStateToProps, mapDispatchToProps )(Search);