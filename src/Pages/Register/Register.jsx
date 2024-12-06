import { useEffect } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "login-theme");

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-gray-600">
      <div className="mt-5">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-xl px-20 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center pb-8 border-b mb-8">Register your account</h2>
          <form>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>
            {/* Photo URL Input */}
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-2" htmlFor="photo">
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                placeholder="Enter your photo URL"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>

            {/* Password Input */}
            <div className="mb-5">
              <label className="block text-xl font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>

            <div className="text-base flex items-center gap-2 mb-7">
              <input type="checkbox" className="checkbox" />
              <p>Accept <a href="#" className="font-semibold">Terms and Conditions</a></p>
            </div>

            {/* Login Button */}
            <div className="mb-6">
              <button className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-semibold">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
