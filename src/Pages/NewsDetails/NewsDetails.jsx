import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { IoArrowBack } from "react-icons/io5";
import { FaLink } from "react-icons/fa";

const NewsDetails = () => {

  const { state } = useLocation();
  const { news } = state || {};
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="grid grid-cols-4 gap-6 mt-16 mb-24">
        <div className="col-span-3">
          <h2 className="text-xl font-semibold mb-5">The Pulse News</h2>
          <div className="p-7 border rounded-lg">
            {news.urlToImage ? (
              <img src={news.urlToImage} alt={news.title} className="w-full h-auto rounded-lg" />
            ) : (
              <div className="bg-gray-300 w-full h-80 flex items-center justify-center rounded-lg">
                <p className="text-3xl text-gray-500">Image Not Available</p>
              </div>
            )}
            {
              news.title ? <h1 className="text-3xl font-bold mt-5 mb-4 text-wrap">{news.title}</h1> : <h1 className="text-3xl font-bold mt-5 mb-2 text-wrap">Title not available.</h1>
            }
            {
              news.content ? <p className="text-base text-gray-600">{news.content}</p> : <p className="text-base text-gray-600">Content not available.</p>
            }
            <a href={news.url} target="_blank"
              rel="noopener noreferrer" className="text-rose-600 font-semibold flex items-center gap-3 underline my-4"><FaLink />Source</a>
            <br />
            <button onClick={() => { navigate(-1) }} className="btn bg-rose-600 hover:bg-rose-500 text-white text-xl font-medium rounded-none"><IoArrowBack /> Go Back</button>
          </div>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default NewsDetails;