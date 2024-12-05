import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <h1 className="font-unifraktur font-bold text-6xl mt-12">The Pulse News</h1>
      <p className="text-lg mt-5">Journalism Without Fear or Favour</p>
      <p className="text-xl font-medium mt-3">{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  );
};

export default Header;