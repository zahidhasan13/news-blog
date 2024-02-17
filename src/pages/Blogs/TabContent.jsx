import { useEffect, useState } from "react";
import BlogLists from "../../components/BlogLists";
import useBlogs from "../../hooks/useBlogs";
// eslint-disable-next-line react/prop-types
const TabContent = ({ currentTab }) => {
  const [blogs] = useBlogs();
  const blogCategory = blogs.filter((data) => data.category === currentTab);
  const itemPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const blog = blogs.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(blogs.length / itemPerPage);
  const pageNumber = [...Array(numberOfPages + 1).keys()].slice(1, lastIndex);
  console.log(blog);

  const handlePagination = (page) => setCurrentPage(page);
  const handlePrev = (page) => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = (page) => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {currentTab === "All" ? (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-5">
          {blog.map((b, i) => (
            <BlogLists key={i} blog={b} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-5">
          {blogCategory.map((blog) => (
            <BlogLists key={blog.id} blog={blog} />
          ))}
        </div>
      )}
      {currentTab === "All" && (
        <div className="join flex items-center justify-center">
          <button onClick={handlePrev} className="join-item btn">
            Prev
          </button>
          {pageNumber.map((page, i) => (
            <button
              onClick={() => handlePagination(page)}
              key={i}
              className={`join-item btn ${
                currentPage === page ? "btn-active" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} className="join-item btn">
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TabContent;
