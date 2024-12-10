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
          <h1 className="text-3xl font-bold mb-4">Career Opportunities</h1>
          <p className="text-lg mb-6">
            At The Pulse News, we are always looking for talented individuals to join our dynamic and diverse team.
            Whether you are passionate about journalism, technology, creating engaging content, or exploring innovative
            ways to connect with audiences, this is the place for you. Our work culture fosters creativity, collaboration,
            and continuous growth, making it an ideal environment for professionals who want to make an impact.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
          <p className="mb-6">
            Joining The Pulse News means being part of a team that values integrity, innovation, and excellence. We offer:
          </p>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">A collaborative and inclusive work environment.</li>
            <li className="mb-2">Opportunities to work on impactful projects that reach a global audience.</li>
            <li className="mb-2">Comprehensive training and development programs to enhance your skills.</li>
            <li className="mb-2">Flexible working options to support a healthy work-life balance.</li>
            <li className="mb-2">Competitive compensation and benefits packages.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
          <ul className="list-disc pl-5 mb-6">
            <li className="mb-2">
              <strong>Reporter</strong> - Location: Remote/On-Site<br />
              Responsible for researching and delivering in-depth news stories across various domains. Experience in
              investigative journalism is a plus.
            </li>
            <li className="mb-2">
              <strong>Content Editor</strong> - Location: Remote<br />
              Ensure the quality and accuracy of published content. Requires excellent writing and editing skills, along
              with a strong eye for detail.
            </li>
            <li className="mb-2">
              <strong>Frontend Developer</strong> - Location: Remote<br />
              Work on enhancing the user experience on our digital platforms. Proficiency in modern web technologies is required.
            </li>
            <li className="mb-2">
              <strong>Social Media Manager</strong> - Location: Remote<br />
              Develop and execute strategies to grow our presence across social media platforms. Must have a knack for
              engaging audiences and creating viral content.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">How to Apply</h2>
          <p className="mb-6">
            To apply, send your resume, cover letter, and portfolio (if applicable) to <a href="mailto:careers@thepulsenews.com" className="text-blue-500">careers@thepulsenews.com</a>.
            Please include the position you are applying for in the subject line of your email. Our recruitment team will review
            your application and get back to you within 7-10 business days.
          </p>
          <p className="mt-6">
            Join us in shaping the future of journalism and technology. Together, let&apos;s redefine how the world connects with news.
          </p>
        </div>

        <RightSideNav />
      </div>
    </div>
  );
};

export default Career;
