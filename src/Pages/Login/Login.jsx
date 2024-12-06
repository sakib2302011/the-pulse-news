import { useEffect } from "react";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
  useEffect(() => {
    // Change the theme for the Login route
    document.documentElement.setAttribute("data-theme", "login-theme");

    // Cleanup: Reset to default theme on unmount
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col text-gray-600">
      {/* Navbar */}
      <div className="mt-5">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-xl p-20 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center pb-12 border-b mb-12">Login your account</h2>
          <form>
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
            <div className="mb-6">
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

            {/* Login Button */}
            <div className="mb-6">
              <button className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-semibold">
                Login
              </button>
            </div>
          </form>

          {/* Register Link */}
          <p className="text-base font-semibold text-center">
            Don’t Have An Account?{" "}
            <a href="/register" className="text-red-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
