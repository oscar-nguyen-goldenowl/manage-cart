import React , {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import './loading.css';

const loading_url = '/images/loading.gif';

class index extends Component {
    render() {
        return (
            <Fragment>
            { 
                this.props.isLoading ?  
                <div className='loading'>
                    <img src={loading_url} alt='loading'/>    
                </div> : 
                ""
            }
            </Fragment>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        isLoading: state.HomeReducer.isLoading,
    }
  }

export default connect( mapStateToProps )(index);
