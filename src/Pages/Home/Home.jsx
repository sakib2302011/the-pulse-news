import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header/>
      <BreakingNews/>
      <Navbar/>
      <div className="grid grid-cols-4 gap-6 border-2">
        <div className="border-2">
          <LeftSideNav/>
        </div>
        <div className="border-2 col-span-2">
          <h2>News coming Soon</h2>
        </div>
        <div className="border-2">
          <RightSideNav/>
        </div>
      </div>
    </div>
  );
};

export default Home;