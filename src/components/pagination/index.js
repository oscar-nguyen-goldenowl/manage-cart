import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    render() {
        const {pageNumbers, handleClick} = this.props;
        
        const renderPageNumbers = pageNumbers.map(number => {
            return  <li className="page-item" key={number}>
                        <a className="page-link" href="/" id={number} onClick={handleClick}>{number}</a>
                    </li>
        })
        return (
            <nav aria-label="Page navigation example" style={{marginTop: 50}}>
                <ul className="pagination" style={{justifyContent: 'center'}}>
                    <li className="page-item">
                        <a id='1' onClick={handleClick} className="page-link" href="/" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {renderPageNumbers}
                    <li className="page-item">
                        <a id={pageNumbers[pageNumbers.length - 1]} onClick={handleClick} className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only" >Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;