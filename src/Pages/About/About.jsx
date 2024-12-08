import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const About = () => {
  return (
    <div>
      <Header/>
      <div className="mt-4">
        <Navbar/>
      </div>
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="col-span-3 p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to The Pulse News, your trusted source for accurate, timely, and unbiased news.
            Founded with the mission to deliver journalism without fear or favor, we are committed to
            providing our readers with the latest updates from around the globe.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            To empower individuals with information that matters, fostering informed decisions and meaningful discussions.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            Our team of dedicated journalists, editors, and tech enthusiasts works tirelessly to bring you
            stories that are not only newsworthy but also impactful. Together, we aim to set new standards in journalism.
          </p>
          <p className="mt-6">
            Thank you for choosing The Pulse News. Stay informed, stay empowered.
          </p>
          <h1 className="text-3xl font-bold mt-16 mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to The Pulse News, your trusted source for accurate, timely, and unbiased news.
            Founded with the mission to deliver journalism without fear or favor, we are committed to
            providing our readers with the latest updates from around the globe.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            To empower individuals with information that matters, fostering informed decisions and meaningful discussions.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            Our team of dedicated journalists, editors, and tech enthusiasts works tirelessly to bring you
            stories that are not only newsworthy but also impactful. Together, we aim to set new standards in journalism.
          </p>
          <p className="mt-6">
            Thank you for choosing The Pulse News. Stay informed, stay empowered.
          </p>
        </div>
        <RightSideNav/>
      </div>
    </div>
  );
};

export default About;