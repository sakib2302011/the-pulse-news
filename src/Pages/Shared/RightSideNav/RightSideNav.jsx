import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const RightSideNav = () => {

  const { auth, user } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  return (
    <div className="">
      <div className="h-[85vh] overflow-y-scroll sticky top-24">
        {
          !user && <div className="mb-7">
            <h2 className="text-xl font-semibold">Login With</h2>
            <button
              onClick={() => {
                signInWithPopup(auth, googleProvider)
                  .then(() => {
                    toast.success("Logged In with Google successfully.");
                  })
              }}
              className="btn btn-outline btn-info w-full btn-sm mt-4 mb-2 "><FcGoogle />Login with Google</button>
            <button
              onClick={() => {
                signInWithPopup(auth, githubProvider)
                  .then(() => {
                    toast.success("Logged In with Github successfully");
                  })
              }}
              className="btn btn-outline w-full btn-sm "><FaGithub />Login with Github</button>
          </div>
        }
        <div className="text-base font-medium mb-7">
          <h2 className="text-xl font-semibold">Find Us On</h2>
          <a href="#" className="flex items-center gap-2 mt-4 p-4 border rounded-t-lg"><img src="/fb.png" alt="fb" width="24px" />Facebook</a>
          <a href="#" className="flex items-center gap-2 p-4 border-x"><img src="/twitter.png" alt="twitter" width="24px" />Twitter</a>
          <a href="#" className="flex items-center gap-2 p-4 border rounded-b-lg"><img src="/instagram.png" alt="instagram" width="24px" />Instagram</a>
        </div>
        <div className="bg-zinc-100 flex flex-col gap-5">
          <h2 className="text-xl font-semibold ms-4 mt-4">Q-Zone</h2>
          <div className="mx-auto">
            <Link><img src="/swimming.png" alt="swimming" /></Link>
            <Link><img src="/class.png" alt="classroom" /></Link>
            <Link><img src="/playground.png" alt="playground" /></Link>
          </div>
        </div>
      </div>

    </div>


  );
};

export default RightSideNav;