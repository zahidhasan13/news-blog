import { useEffect, useState } from "react";
import BlogLists from "../../components/BlogLists";
// eslint-disable-next-line react/prop-types
const TabContent = ({ currentTab }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const blogCategory = blogs.filter((data) => data.category === currentTab);

  return (
    <div>
      {currentTab === "All" ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-5">
          {blogs.map((blog, i) => (
            <BlogLists key={i} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-5">
          {blogCategory.map((blog) => (
            <BlogLists key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabContent;
