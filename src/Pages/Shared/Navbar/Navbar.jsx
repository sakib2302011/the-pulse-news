import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

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
    <div className="navbar bg-base-100">
      {/* Mobile Menu */}
      <div className="navbar-start lg:hidden">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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
            placeholder="Search News"
            className="text-lg bg-inherit border-2 rounded-lg py-1 px-10 w-full"
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
          <Link to="/login" className="bg-zinc-700 text-white text-xl font-semibold px-8 py-2">
            Login
          </Link>
        )}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" aria-label="User Menu">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img
                src={user.photoURL}
                alt="user photo"
                loading="lazy"
              />
              
              ) : (
                <img alt="user photo" src="/user.png" />
              )}
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/profile">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
