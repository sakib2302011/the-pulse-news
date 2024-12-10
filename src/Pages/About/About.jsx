import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const About = () => {
  return (
    <div>
      <Header />
      <div className="mt-4">
        <Navbar />
      </div>
      <div className="grid grid-cols-4 gap-6 my-12">
        <div className="col-span-3 p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to The Pulse News, your tr  usted source for accurate, timely, and unbiased news.
            Founded with the mission to deliver journalism without fear or favor, we are committed to
            providing our readers with the latest updates from around the globe. At The Pulse News,
            we believe that information is power, and we strive to empower our readers by delivering
            content that is not only engaging but also deeply insightful.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="mb-6">
            Our vision is to empower individuals with information that matters, fostering informed
            decisions and meaningful discussions. We aim to create a world where news transcends
            boundaries and barriers, bringing people closer to understanding global events and their
            implications. Through our dedication to truth and transparency, we aspire to be a guiding
            light in an era of misinformation.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            At The Pulse News, our mission is to deliver comprehensive coverage that spans across
            diverse topics, including politics, business, technology, culture, and the environment. We
            are committed to providing news that is free from bias and serves as a reliable resource for
            our readers. By leveraging innovative tools and methodologies, we ensure that our content
            is both relevant and impactful.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <p className="mb-6">
            Our team is composed of dedicated journalists, editors, and tech enthusiasts who work
            tirelessly to bring you stories that are not only newsworthy but also meaningful. Our
            journalists come from diverse backgrounds and bring a wealth of experience to the table,
            ensuring that every story is thoroughly researched and accurately reported. Our editors
            uphold the highest standards of integrity and precision, while our tech experts continuously
            innovate to enhance your experience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="mb-6">
            In a rapidly changing world, staying informed is more important than ever. Choosing The Pulse News means:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Access to credible and well-researched news articles.</li>
            <li>Coverage of a wide range of topics to cater to diverse interests.</li>
            <li>A commitment to impartiality and ethical reporting.</li>
            <li>Innovative digital tools that enhance your reading experience.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Looking Ahead</h2>
          <p className="mb-6">
            As we look to the future, we remain steadfast in our dedication to excellence. We plan to
            expand our coverage, introduce new interactive features, and continue investing in the
            latest technologies to bring you closer to the stories that matter. Together, let us shape
            a more informed and connected world.
          </p>
          <p className="mt-6">
            Thank you for choosing The Pulse News. Stay informed, stay empowered, and join us on this
            journey to redefine journalism in the digital age.
          </p>
        </div>

        <RightSideNav />
      </div>
    </div>
  );
};

export default About;