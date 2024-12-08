import { useEffect, useContext, useRef, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from './../../Providers/AuthProvider';
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";


const Login = () => {

  const { user ,logIn, resetPassword } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "login-theme");

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  const handleLogin = e => {
    e.preventDefault();
    
    if(user){
      return alert("Please log out before logging into another account.");
    }

    setLoading(true);

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setLoading(false);

      return setLoginError("Please enter a valid email.")
    }
    else if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      setLoading(false);

      return setLoginError(
        "Your password must contain at least 8 characters, a special symbol, a number, uppercase and lowercase letter.");
    }
    setLoginError(null);

    logIn(email, password)
      .then(() => {
        setLoading(false);
        toast.success("Logged in successfully.");
      })
      .catch(() => {
        setLoading(false);

        setLoginError("Invalid email or password.")
      })
  }
  const handleForgetPass = () => {
    setLoading(true);

    const email = emailRef.current.value;
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
      setLoading(false);

      return setLoginError("To reset password , please enter a valid email.")
    }
    setLoginError(null);

    resetPassword(email)
      .then(() => {
        setLoading(false);

        toast.success("Password resetting email sent successfully!");

        setIsModalOpen(true);
      })
      .catch((error) => {
        setLoading(false);
        setLoginError("This email is not registered yet .");
        console.log(error);
      })




  }

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-ring w-24"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-gray-600">
      {/* Navbar */}
      <div className="mt-5">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-center">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <div className="w-full max-w-xl px-20 py-12 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center pb-12 border-b mb-12">Login your account</h2>
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-2" htmlFor="email">
                Email address
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                required
                placeholder="Enter your email address"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4 relative">
              <label className="block text-xl font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                ref={passRef}
                placeholder="Enter your password"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
              <span
                onClick={() => {
                  setShowPass(!showPass);
                }}
                className="text-2xl absolute top-12 right-4"
              >
                {showPass ? <IoMdEyeOff /> : <IoMdEye />}
              </span>
            </div>

            {/* Forgot password */}
            <p onClick={handleForgetPass} className="text-sm font-semibold mb-4 cursor-pointer">
              Forgot Password ?
            </p>

            {/* Login Button */}
            <div className="mb-6">
              <button type="submit" className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-semibold">
                Login
              </button>
            </div>
            {loginError && (
              <div className="text-base font-semibold text-red-500 mb-4">
                <p>{loginError}</p>
              </div>
            )}
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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="font-bold text-lg text-center">An Email sent for resetting password</h3>
            <p className="py-4 text-center">
              Please reset your password and try login again.
            </p>
            <button
              className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-lg mt-4"
              onClick={() => { setIsModalOpen(false) }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
