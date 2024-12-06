import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div className="mb-7">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn btn-outline btn-info w-full btn-sm mt-4 mb-2 "><FcGoogle />Login with Google</button>
        <button className="btn btn-outline w-full btn-sm "><FaGithub />Login with Github</button>
      </div>
      <div className="text-base font-medium mb-7">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <a href="" className="flex items-center gap-2 mt-4 p-4 border rounded-t-lg"><img src="/fb.png" alt="fb" width="24px" />Facebook</a>
        <a href="" className="flex items-center gap-2 p-4 border-x"><img src="/twitter.png" alt="twitter" width="24px" />Twitter</a>
        <a href="" className="flex items-center gap-2 p-4 border rounded-b-lg"><img src="/instagram.png" alt="instagram" width="24px" />Instagram</a>
      </div>
      <div className="bg-zinc-100 flex flex-col gap-5">
        <h2 className="text-xl font-semibold ms-4 mt-4">Q-Zone</h2>
        <img src="/swimming.png" alt="swimming" />
        <img src="/class.png" alt="classroom" />
        <img src="/playground.png" alt="playground" />
        <img src="/bg.png" alt="background" />
      </div>
    </div>
  );
};

export default RightSideNav;