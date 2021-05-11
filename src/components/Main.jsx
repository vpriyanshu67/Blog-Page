import React, {useState, Fragment, useEffect} from  'react';
import Post from './post';
import axios from 'axios';
import Pagination from './pagination';
import {paginate} from './paginate';
import './Main.css';
import "bootstrap/dist/css/bootstrap.css";

function Main(props) {

    const [blogPosts, setBlogPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
               async function getBlogs(){
               const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
               setBlogPosts(data);
               }
               getBlogs();          
    });
 
    const handlePageChange = page =>{
         console.log(page);
         setCurrentPage(page);
     }
    const finalPosts = paginate(blogPosts, currentPage, pageSize)

    
return (
    <div>
        <header className = "center"><h1>Welcome to Blog Page</h1></header>
          <div className="blog-list-row">
        <div className = "container">
            <div className="row">            
          {finalPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}
         </div>
          </div>
        </div>
        
          <Pagination 
            itemsCount={blogPosts.length} 
             pageSize= {pageSize} 
             currentPage = {currentPage}
             onPageChange = {handlePageChange} ></Pagination>
           
        </div> 
      );

}

export default Main;