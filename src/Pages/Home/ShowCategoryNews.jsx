import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";
import { CiShare2, CiBookmark } from "react-icons/ci";

const ShowCategoryNews = ({ news }) => {
  
  const { title, urlToImage, description, publishedAt, author } = news;
  return (
    <div>
      <div className="bg-zinc-100 px-5 py-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-5xl"></FaUserCircle>
          <div>
            <h4 className="text-base font-semibold">{author}</h4>
            <p className="text-sm text-gray-600">{publishedAt}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-2xl font-bold">
          <CiBookmark/>
          <CiShare2/>
        </div>
      </div>
      <div className="p-4 border mb-7 rounded-b-lg text-base">
        <h3 className="text-xl font-bold text-balance mb-5">{title}</h3>
        <img src={urlToImage} alt="" />
        <p className="text-sm text-gray-600 mt-8">{description}</p>
        <Link className="text-orange-600 font-semibold">Read More</Link>
        <div className="flex justify-between mt-5 py-5 border-t">
          <div className="flex items-center gap-2">
            <div className="flex">
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
              <img src="/star.png" alt="star" />
            </div>
            <span className="text-base font-medium text-gray-600">4.9</span>
          </div>
          <div className="text-base font-semibold text-gray-600 flex items-center gap-2">
            <MdRemoveRedEye className="text-xl"/>
            <span>499</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryNews;