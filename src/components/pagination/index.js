import React, { Component } from 'react';
import './pagination.css';

class Pagination extends Component {
    handleClick = (event) => {
      // selected for pagination : start
      let tagAllPagination = event.target.parentElement.parentElement.childNodes;
      let prevPagination = event.target.parentElement;      
      
      tagAllPagination.forEach(tag => {
        tag.classList.remove('active-pagination')
      });

      prevPagination.classList.toggle('active-pagination')
      // selected for pagination : end

      this.props.handleClick(event);
    }
    render() {
        const {amountProducts, itemPage} = this.props;

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(amountProducts / itemPage); i++) {
            pageNumbers.push(i);
        }
        
        const renderPageNumbers = pageNumbers.map(number => {
            return  <li className="page-item" key={number}>
                        <a className="page-link" href="/" id={number} onClick={this.handleClick}>{number}</a>
                    </li>
        })
        return (
            <nav aria-label="Page navigation example" style={{marginTop: 50}}>
                <ul className="pagination" style={{justifyContent: 'center'}}>
                    <li className="page-item">
                        <a id='1' onClick={this.handleClick} className="page-link" href="/" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Previous</span>
                        </a>
                    </li>
                    {renderPageNumbers}
                    <li className="page-item">
                        <a id={pageNumbers[pageNumbers.length - 1]} onClick={this.handleClick} className="page-link" href="/" aria-label="Next">
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