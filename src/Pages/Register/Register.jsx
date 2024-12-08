import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const {user, createUser, verifyEmail, updateUserProfile } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if(user){
      return alert("Please log out before registering a new user.")
    }
    setLoading(true);
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.terms.checked;

    function isUrlValid(userInput) {
      var res = userInput.match(
        /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g
      );
      if (res == null) return false;
      else return true;
    }

    if (!/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
      setLoading(false);
      return setRegisterError(
        "Your password must contain at least 8 characters, a special symbol, a number, uppercase and lowercase letter."
      );
    } else if (!isUrlValid(photoURL)) {
      setLoading(false);
      return setRegisterError("Please enter a valid URL.");
    } else if (!checked) {
      setLoading(false);
      return setRegisterError("Please accept our Terms and Conditions.");
    }
    setRegisterError(null);

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photoURL)
          .then(() => {
            verifyEmail()
              .then(() => {
                setLoading(false);
                toast.success("Email verification sent. Please check your email.");
                setIsModalOpen(true);
              })
              .catch(() => {
                setLoading(false);
                toast.error("Error in sending email verification.");
              });
          })
          .catch(() => {
            setLoading(false);
            toast.error("Error updating user profile.");
          });
      })
      .catch(() => {
        setRegisterError("Email is already in use. Please try again with a different email.");
        setLoading(false);
      });
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "login-theme");

    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center h-screen">
        <span className="loading loading-ring w-24"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col text-gray-600">
      <div className="mt-5">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow justify-center items-center">
        <div className="w-full max-w-xl px-20 py-8 bg-white rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-center pb-8 border-b mb-8">Register your account</h2>
          <form onSubmit={handleOnSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-xl font-semibold mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
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
                name="photo"
                required
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
                name="email"
                required
                placeholder="Enter your email address"
                className="input input-bordered rounded-none w-full bg-gray-50"
              />
            </div>

            {/* Password Input */}
            <div className="mb-5 relative">
              <label className="block text-xl font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                required
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

            <div className="text-base flex items-center gap-2 mb-7">
              <input type="checkbox" name="terms" className="checkbox checkbox-secondary" />
              <p>
                Accept <a href="#" className="font-semibold">Terms and Conditions</a>
              </p>
            </div>

            {/* Register Button */}
            <div className="mb-6">
              <button
                type="submit"
                className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-xl font-semibold"
              >
                Register
              </button>
            </div>
          </form>
          {registerError && (
            <div className="text-base font-semibold text-red-500">
              <p>{registerError}</p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="font-bold text-lg text-center">Registration Successful!</h3>
            <p className="py-4 text-center">
              Please verify your email to complete the registration process.
            </p>
            <button
              className="btn w-full bg-zinc-800 hover:bg-zinc-700 text-white text-lg mt-4"
              onClick={()=> {navigate("/")}}
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

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
    </div>
  );
};

export default Register;
