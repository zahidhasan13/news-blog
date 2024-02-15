import { Link } from "react-router-dom";

const BlogLists = ({ blog }) => {
  const { title, image, published_date } = blog;
  console.log(blog);
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
        <p className="my-2 font-semibold text-gray-400">
          Publish Date: {published_date}
        </p>
        <Link
          to="/blogs/id"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogLists;
