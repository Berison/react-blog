import React from "react";
import classes from './BlogPageSingle.module.css';
import { useParams, Link } from "react-router-dom";
import dataBlog from "../../DataBlog";

const BlogPageSingle = () => {
  let {id} = useParams();

  let idPost = dataBlog.map(elem => `${elem.id}`).indexOf(id);
  
  return(
    <div className={classes.blogPageSingle}>
      <Link to='/'>Return to Blog</Link>
      <h1>{dataBlog[idPost].title}</h1>
      <p>{dataBlog[idPost].body}</p>
    </div>
  )
}

export default BlogPageSingle;