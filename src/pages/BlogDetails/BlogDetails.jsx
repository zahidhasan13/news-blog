import { useParams } from "react-router-dom";
import useBlogs from "../../hooks/useBlogs";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogs] = useBlogs();
  console.log(blogs);
  return <div></div>;
};

export default BlogDetails;
