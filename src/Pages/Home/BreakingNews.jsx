import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FetchWithNetworkCheck } from './../ErrorPage/FetchWithNetworkCheck';
import ErrorPage from "../ErrorPage/ErrorPage";

const BreakingNews = () => {
  
  const [breakingNews, setBreakingnews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await FetchWithNetworkCheck(import.meta.env.URL);
        setBreakingnews(res);
        console.log(res);
      } catch (err) {
        setError({ message: err.message, status: "Network Error" });
      }
    };

    loadData();
  }, []);

  return (
    <div className="flex gap-5 bg-zinc-100 p-3 mt-7">
      <button className="btn btn-secondary rounded-none font-medium text-xl">Top Headlines</button>
      <Marquee className="text-lg font-semibold">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur vitae reiciendis mollitia ipsum, sapiente laboriosam eum provident officia quidem dolorum, eligendi ullam fugiat, eveniet optio voluptates praesentium itaque vel maxime. Minima architecto amet natus sunt ut, debitis fuga molestiae illo!</h2>
      </Marquee>
    </div>
  );
};

export default BreakingNews;