import React, {useState, Fragment} from  'react';
import './post.css';
import images from './images';
function Post({post}) {
 

return (
    <Fragment>
        
        <div className ="col-md-4 blog-list-box">
          <div className="blog-list-img">
            <a href = ""><img className = "image" src = {images.blogImage} alt = "post"/></a>
          </div>  
          <h3> <a href = "">{post.title}</a></h3>
            <p className="blog-desc">{post.body}</p> 
            <a href="single-blog.html" className="arrow-btn">Read more</a>
            <div className="blog-list-author">
              <div className="blog-author-img">
                <img src={images.author}/>
              </div>
              <div className="blog-author-name">
                <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
              </div>
            </div>
            
        </div>
    </Fragment>
)
}

export default Post;