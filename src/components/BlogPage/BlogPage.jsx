import React from "react";
import classes from './BlogPage.module.css';
import { Link } from "react-router-dom";
import dataBlog from "../../DataBlog";

const BlogPage = () => {
  const mapDataBlog = dataBlog.map((elem, index) => {
    return (
      <div key={elem.id} className={classes.blogPageSingle}>
        <strong><span>{index + 1}. </span>{elem.title}</strong>
        <p>{elem.body}</p>
        <Link to={`/posts/${elem.id}`}>More</Link>
      </div>
    )
  })

  return (
    <div className={classes.container}>
      <h1>My blog</h1>
      <div className={classes.blogPage}>
        {mapDataBlog}
      </div>
    </div>
  )
}

export default BlogPage;