import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = ({ label }) => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();

  let errorEl;

  if (error) {
    errorEl = (
      <div className="alert alert-error shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error.message}</span>
        </div>
      </div>
    );
  }

  if (user) {
    navigate("/");
  }

  return (
    <div className="flex flex-col gap-2 w-full border-opacity-50">
      {errorEl}
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-secondary flex items-center gap-2"
      >
        <BsGoogle /> {label} with Google
      </button>
      <button className="btn btn-secondary flex items-center gap-2">
        <BsFacebook /> {label} with Facebook
      </button>
      <button className="btn btn-secondary flex items-center gap-2">
        <BsGithub /> {label} with GitHub
      </button>
      <div className="divider">OR</div>
    </div>
  );
};

export default SocialLogin;
