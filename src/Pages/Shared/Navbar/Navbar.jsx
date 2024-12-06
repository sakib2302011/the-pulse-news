import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {

  const links = <>
    <li><NavLink to="/" className={({ isActive }) =>
      isActive
        ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
        : " hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
    }>Home</NavLink></li>
    <li><NavLink to="/about" className={({ isActive }) =>
      isActive
        ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
        : " hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
    }>About</NavLink></li>
    <li><NavLink to="/career" className={({ isActive }) =>
      isActive
        ? "bg-zinc-200 font-semibold px-4 py-2 rounded hover:bg-zinc-200"
        : " hover:font-semibold hover:bg-zinc-200 px-4 py-2 rounded"
    }>Career</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="relative w-28 md:w-auto">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search News"
            className="text-lg bg-inherit border-2 rounded-lg py-1 px-10 w-full"
          />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          {links}
        </ul>
      </div>
      <div className="navbar-end items-center gap-2">
        <Link to="/login" className="bg-zinc-700 text-white text-xl font-semibold px-8 py-2">Login</Link>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="user photo"
                src="/user.png" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

  );
};

export default Navbar;