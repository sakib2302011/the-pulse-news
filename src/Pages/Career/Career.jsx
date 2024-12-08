import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Career = () => {
  return (
    <div>
      <Header />
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="col-span-3 p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mt-4 mb-4">Career Opportunities</h1>
          <p className="text-lg mb-6">
            At The Pulse News, we are always looking for talented individuals to join our team.
            If you are passionate about journalism, technology, or creating engaging content, this is the place for you.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Reporter - Location: Remote/On-Site</li>
            <li className="mb-2">Content Editor - Location: Remote</li>
            <li className="mb-2">Frontend Developer - Location: Remote</li>
            <li className="mb-2">Social Media Manager - Location: Remote</li>
          </ul>
          <p className="mt-6">
            To apply, send your resume and cover letter to <a href="mailto:careers@thepulsenews.com" className="text-blue-500">careers@thepulsenews.com</a>.
          </p>
          <h1 className="text-3xl font-bold mt-24 mb-4">Career Opportunities</h1>
          <p className="text-lg mb-6">
            At The Pulse News, we are always looking for talented individuals to join our team.
            If you are passionate about journalism, technology, or creating engaging content, this is the place for you.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Reporter - Location: Remote/On-Site</li>
            <li className="mb-2">Content Editor - Location: Remote</li>
            <li className="mb-2">Frontend Developer - Location: Remote</li>
            <li className="mb-2">Social Media Manager - Location: Remote</li>
          </ul>
          <p className="mt-6">
            To apply, send your resume and cover letter to <a href="mailto:careers@thepulsenews.com" className="text-blue-500">careers@thepulsenews.com</a>.
          </p>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default Career;
