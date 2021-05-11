
import React, {useState, Fragment, useEffect} from  'react';
import _ from 'lodash';
import './pagination.css';


function Pagination(props) {
 const {itemsCount, pageSize, onPageChange, currentPage, MaxPage, MinPage, handleNextbtn, handlePrevbtn} = props; 
 const pageCount = itemsCount/pageSize;
 const pages =_.range(1, pageCount+1);
 
 
 const renderPageNumbers =  pages.map((page, index)  =>{
     console.log(MaxPage)
    if (page < MaxPage + 1 && page > MinPage){
         return (
         <li key ={index} className = {page === currentPage? 'page-item active':'page-item'}>
         <a className = "page-link" onClick={()=>onPageChange(page) }>{page}</a>
         </li>);
    }
    else 
        return null;
         });  


return ( 
         <div className = "container">
        <nav aria-label="pagination">
            <ul className = "pagination" >
            <li><button className= "btn btn-success" onClick={handlePrevbtn} disabled={currentPage == pages[0] ? true : false}>Prev</button></li>  
            {renderPageNumbers}
            
           <li><button className= "btn btn-success" onClick={handleNextbtn} disabled={currentPage == pages[pages.length - 1] ? true : false}>Next</button></li>         
           </ul>
        </nav>
        </div> 
      );

}

export default Pagination;