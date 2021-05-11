
import React, {useState, Fragment, useEffect} from  'react';
import _ from 'lodash';
import './pagination.css';


function Pagination(props) {
 const {itemsCount, pageSize, onPageChange, currentPage} = props; 
 const pageCount = itemsCount/pageSize;
 const pages =_.range(1, pageCount+1);   
return ( 
        <div className = "container">   
        <nav aria-label="pagination">
            <ul className = "pagination" >
            {pages.map((page, index) =>
            <li key ={index} className = {page === currentPage? 'page-item active':'page-item'}>
            <a className = "page-link" onClick={()=>onPageChange(page) }>{page}</a>
            </li>)}

           </ul>
        </nav>
        </div> 
      );

}

export default Pagination;