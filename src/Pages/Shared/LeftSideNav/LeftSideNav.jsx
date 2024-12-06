import { useState } from "react";

const LeftSideNav = ({ handleShowCategory }) => {
  const [activeCategory, setActiveCategory] = useState("National News");

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
    setActiveCategory(category);
    const lowerCategory = category.toLowerCase();
    handleShowCategory(lowerCategory);
  };

  return (
    <div>
      <div className="text-xl">
        <h3 className="font-semibold mb-4">All Categories</h3>
        <ul className="mt-4 cursor-pointer">
          {categories.map((category) => (
            <li
              key={category}
              className={`py-4 text-center rounded-lg ${
                activeCategory === category ? "bg-zinc-200 font-semibold" : "font-medium text-zinc-500"
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

export default LeftSideNav;
