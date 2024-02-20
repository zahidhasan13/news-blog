import React from "react";
import useBlogs from "../../hooks/useBlogs";
import { Link, useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [blogs] = useBlogs();
  const blog = blogs.find((b) => b?.id == id);
  const relatedBlog = blogs.filter((b) => b?.category === blog?.category);
  console.log(relatedBlog.length);
  return (
    <div className="max-w-screen-xl mx-auto my-5">
      <div className="grid lg:grid-cols-4 gap-5">
        <div className="col-span-3 space-y-2">
          <img src={blog?.image} alt={blog?.title} className="w-full" />
          <h1 className="lg:text-3xl">{blog?.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/516/041/original/man-person-character-avatar-png.png"
                alt=""
                className="w-12 mr-2"
              />
              <p>{blog?.author}</p>
            </div>
            <p className="text-sm text-gray-400">
              Published Date: {blog?.published_date}
            </p>
          </div>
          <div className="space-y-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              blanditiis officiis eveniet accusamus enim quas inventore
              voluptates voluptatem soluta illum? Consequatur tenetur autem
              officia repudiandae atque assumenda ipsum veritatis eum illo
              laudantium distinctio obcaecati perspiciatis rerum, architecto ea
              numquam eius sequi. Libero fugit, iure suscipit saepe harum,
              mollitia perferendis, asperiores nobis placeat illum optio? Eum
              quae odio nam. Veniam tempora aliquid iste animi reprehenderit
              enim! Mollitia voluptatum placeat reprehenderit praesentium
              assumenda molestiae quia aliquid modi sunt earum. Et numquam minus
              error nobis exercitationem ad ipsum quos amet modi, in optio
              nesciunt dolor dolorum. Asperiores fugiat repudiandae
              exercitationem nam rerum autem? Obcaecati corporis soluta sequi
              possimus. Alias illo esse obcaecati cupiditate nemo nobis animi
              accusantium velit in adipisci officia asperiores cumque, maiores
              consequatur atque dolor tempore ipsa aliquid. Praesentium qui iure
              velit rerum error sapiente soluta, aut, quos atque, cupiditate in
              recusandae aspernatur. Placeat ipsam repellat autem impedit magni!
              Corporis, iusto?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              magnam animi explicabo facilis perferendis, fugiat facere, odit,
              consequuntur harum suscipit doloremque itaque ratione distinctio
              iusto quo iure ea quidem fuga autem obcaecati exercitationem
              repellendus. Iure soluta cupiditate animi. Impedit ipsam suscipit
              quisquam cupiditate delectus excepturi asperiores maiores facere
              eveniet sint ducimus placeat illo, illum beatae nam nulla quod
              nihil, perspiciatis voluptatum quae eos omnis voluptatem. Dolorem
              esse architecto sit in repudiandae natus distinctio, ex
              accusantium fugiat voluptates aut magnam iusto!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              similique ea earum sit sequi tenetur! Adipisci beatae cupiditate,
              eveniet facere voluptas facilis voluptatum hic. Corrupti iste
              architecto perferendis sequi perspiciatis.
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <p className="text-xl font-bold border-b-2 border-black pb-1">
            Related Category Blog
          </p>
          <div className="space-y-2">
            {relatedBlog.map((rb) => (
              <div key={rb.id}>
                <Link to={`blogDetail/${rb?.id}`}>
                  <h2 className="font-semibold">{rb?.title}</h2>
                </Link>
                <p className="text-sm text-gray-400">
                  Published Date: {blog?.published_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
