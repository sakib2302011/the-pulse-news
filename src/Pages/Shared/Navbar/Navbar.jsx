import { Link, NavLink, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext, useRef } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import keywordExtractor from "keyword-extractor";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const searchText = searchRef.current.value.trim();
      if (!searchText) {
        return;
      }

      const keywords = keywordExtractor.extract(searchText, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: true,
      });

      const finalSearchText = keywords.join(" ");
      if (finalSearchText) {
        navigate("/search", { state: { query: finalSearchText } });
      }
    }
  };

  const handleLogOut = () => {
    logOut()
      .then()
      .catch();
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
              : "hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
              : "hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/career"
          className={({ isActive }) =>
            isActive
              ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
              : "hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 navbar bg-base-100">
      {/* Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
      </div>

      {/* Search Bar */}
      <div className="navbar-start hidden lg:flex">
        <div className="relative w-28 md:w-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="search"
            ref={searchRef}
            onKeyDown={handleSearch}
            placeholder="Search News"
            className="text-base bg-inherit border-2 rounded-lg py-1 px-10 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>

      {/* Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
      </div>

      {/* User Controls */}
      <div className="navbar-end items-center gap-2">
        {!user && (
          <Link
            to="/login"
            className="bg-zinc-700 text-white text-xl font-semibold px-8 py-2"
          >
            Login
          </Link>
        )}
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
              aria-label="User Menu"
            >
              <div className="w-10 rounded-full">
                {user?.photoURL ? (
                  <img src={user.photoURL} alt="user photo" loading="lazy" />
                ) : (
                  <img alt="user photo" src="/user.png" />
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-zinc-300  rounded-box z-50 mt-3 w-52 p-2 shadow font-semibold"
            >
              <li>
                <button onClick={handleLogOut}>
                  <CiLogout className="text-xl font-extrabold" /> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
