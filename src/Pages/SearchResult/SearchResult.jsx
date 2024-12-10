import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreakingNews from "../Home/BreakingNews";
import ShowCategoryNews from "../Home/ShowCategoryNews";
import FilterSortBar from "./FilterSortBar";

const SearchResult = () => {
  const [showNews, setShowNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [activeCategory, setActiveCategory] = useState("");

  const location = useLocation();
  const searchQuery = location.state?.query || "general";
  const apiKey = import.meta.env.VITE_NEWSAPIKEY;
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  useEffect(() => {
    setActiveCategory(searchQuery); // Sync active category with query
    setUrl(`https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=${apiKey}`);
  }, [searchQuery, apiKey]);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        setShowNews(data.articles || []);
      } catch (error) {
        navigate("/error", {
          state: { error: { message: error.message } },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, navigate]);

  const onApplyFilters = (startDate, endDate, sortBy) => {
    setUrl(
      `https://newsapi.org/v2/everything?q=${searchQuery}${startDate ? `&from=${startDate}` : ""}${endDate ? `&to=${endDate}` : ""}${sortBy ? `&sortBy=${sortBy}` : ""}&apiKey=${apiKey}`
    );
  };

  const handleShowCategory = (category) => {
    setActiveCategory(category);
    navigate("/", { state: { query: category } });
  };

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <BreakingNews />
      <Navbar />
      <FilterSortBar onApplyFilters={onApplyFilters} />
      <div className="grid grid-cols-4 gap-6 my-12">
        <LeftSideNav activeCategory={activeCategory} handleShowCategory={handleShowCategory} />
        <div className="col-span-2">
          {showNews.length ? (
            showNews.map((news, index) => <ShowCategoryNews key={index} news={news} />)
          ) : (
            <h2 className="text-center text-lg font-semibold">No news available</h2>
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

export default SearchResult;
