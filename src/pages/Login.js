import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import SocialLogin from "../components/SocialLogin";

const Login = ({ navbarHeight }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

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
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(email);
  };

  return (
    <div
      className="hero min-h-screen bg-base-100"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login</h1>
          <p className="py-6">
            Please login to your account, and get access to our amazing
            services.
          </p>
        </div>
        <SocialLogin label="Login" />
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                placeholder="hello@example.com"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                placeholder="write your password"
                className="input input-bordered"
              />
              <label className="label self-start">
                <button onClick={resetPassword} className="link link-hover">
                  Forgot password?
                </button>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                onClick={handleLogin}
                type="submit"
                className="btn btn-primary"
              >
                Login
              </button>
              <p className="pt-2">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-info underline underline-offset-2 hover:text-secondary font-medium"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        {errorEl}
      </div>
    </div>
  );
};

export default Login;
