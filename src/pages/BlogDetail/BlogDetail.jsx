import React from "react";
import useBlogs from "../../hooks/useBlogs";

const BlogDetail = () => {
  const blogs = useBlogs();
  console.log(blogs);
  return <div></div>;
};

export default BlogDetail;
