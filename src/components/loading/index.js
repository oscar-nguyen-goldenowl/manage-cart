import React , {Fragment} from 'react';
import './loading.css';

const Loading = () => {
    return (
        <Fragment>
            <div className='loading'>
                <img src="./images/loading.gif" alt='loading'/>    
            </div>
        </Fragment>
    );
};

export default Loading;