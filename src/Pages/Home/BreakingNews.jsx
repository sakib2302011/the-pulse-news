import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from "react-router-dom";

const BreakingNews = () => {

  const [breakingNews, setBreakingNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const url = import.meta.env.VITE_URL;

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
        setBreakingNews(data);
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
      <div className="flex justify-center p-3 mt-7">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }


  console.log(breakingNews);

  return (
    <div className="flex gap-5 bg-zinc-100 p-3 mt-7">
      <button className="btn btn-secondary rounded-none font-medium text-xl">Top Headlines</button>
      <Marquee className="text-lg font-semibold">
        {
          breakingNews.articles.map((article, index) => <Link key={index}><h2 
          className="me-20"
          >{article.title}</h2></Link> )
        }
      </Marquee>
    </div>
  );
};

export default BreakingNews;