import PropTypes from "prop-types";

const LeftSideNav = ({ activeCategory, handleShowCategory }) => {
  const categories = [
    "National News",
    "Business",
    "Entertainment",
    "General",
    "Health",
    "Science",
    "Sports",
    "Technology",
  ];

  const handleCategory = (category) => {
    handleShowCategory(category.toLowerCase());
  };

  return (
    <div>
      <div className="text-xl sticky top-24">
        <h3 className="font-semibold mb-4">All Categories</h3>
        <ul className="mt-4 cursor-pointer">
          {categories.map((category) => (
            <li
              key={category}
              className={`py-4 text-center rounded-lg ${
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? "bg-zinc-200 font-semibold"
                  : "font-medium text-zinc-500"
              }`}
              onClick={() => handleCategory(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

LeftSideNav.propTypes = {
  activeCategory: PropTypes.string.isRequired,
  handleShowCategory: PropTypes.func.isRequired,
};

export default LeftSideNav;
