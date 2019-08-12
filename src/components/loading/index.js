import React , {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import './loading.css';

const loading_url = '/images/loading.gif';

class index extends Component {
    render() {
        return (
            <Fragment>
            { 
                this.props.isloading ?  
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
        isloading: state.HomeReducer.isloading,
    }
  }

export default connect( mapStateToProps )(index);
