import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ShowCategoryNews from "./ShowCategoryNews";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [showNews, setShowNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("national news");

  const navigate = useNavigate();
  const location = useLocation();
  const bypassCategory = location.state?.query;

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      document.documentElement.removeAttribute("light");
    };
  }, []);

  useEffect(() => {
    if (bypassCategory) {
      setActiveCategory(bypassCategory);
    }
  }, [bypassCategory]);

  const fetchNews = useCallback(async (category) => {
    setLoading(true);
    const url =
      category === "national news"
        ? "https://the-pulse-news-backend.vercel.app/national"
        : `https://the-pulse-news-backend.vercel.app/${category}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setShowNews(data.articles || []);
    } catch (error) {
      navigate("/error", { state: { error: { message: error.message } } });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory, fetchNews]);

  const handleShowCategory = (category) => {
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <div>
        <Header />
        <BreakingNews />
        <Navbar />
        <div className="grid grid-cols-4 gap-6 my-12">
          <LeftSideNav activeCategory={activeCategory} handleShowCategory={handleShowCategory} />
          <div className="col-span-2">
            <div className="flex justify-center h-96">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          </div>
          <RightSideNav />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <div className="grid grid-cols-4 gap-6 my-12">
        <LeftSideNav activeCategory={activeCategory} handleShowCategory={handleShowCategory} />
        <div className="col-span-2">
          {showNews.length ? (
            showNews.map((news, index) => <ShowCategoryNews key={index} news={news} />)
          ) : (
            <h2 className="text-center">No news available</h2>
          )}
        </div>
        <RightSideNav />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Home;
