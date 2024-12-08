import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowCategoryNews from "./ShowCategoryNews";
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  useEffect(() => {
    // Change the theme for the Login route
    document.documentElement.setAttribute("data-theme", "light");

    // Cleanup: Reset to default theme on unmount
    return () => {
      document.documentElement.removeAttribute("light");
    };
  }, []);

  const [showNews, setShowNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiKey = import.meta.env.VITE_NEWSAPIKEY;
  const [url, setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
  const navigate = useNavigate();

  const handleShowCategory = (category) => {
    if (category == "national news") {
      return setUrl(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    }
    setUrl(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          navigate("/error", {
            state: {
              error: {
                status: response.status,
                message: response.statusText || "Unknown error occurred.",
              },
            },
          });
          return;
        }

        const data = await response.json();
        if (data && data.articles) {
          setShowNews(data.articles); // Correctly handle articles from API response
        } else {
          throw new Error("Invalid API response");
        }
      } catch (error) {
        navigate("/error", {
          state: {
            error: {
              status: null,
              message: error.message || "Failed to fetch data.",
            },
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, navigate]);

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
      <div className="grid grid-cols-4 gap-6 my-12">
        <div>
          <LeftSideNav handleShowCategory={handleShowCategory} />
        </div>
        <div className="col-span-2">
          {showNews.length > 0 ? (
            showNews.map((news, index) => (
              <ShowCategoryNews key={index} news={news}></ShowCategoryNews>
            ))
          ) : (
            <h2 className="text-center">No news available</h2>
          )}
        </div>
        <div>
          <RightSideNav />
          <Link><img src="/bg.png" alt="background" className="w-full" /></Link>
        </div>
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
