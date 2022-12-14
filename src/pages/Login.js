import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import SocialLogin from "../components/SocialLogin";

const Login = ({ navbarHeight }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    setEmail("");
    setPassword("");
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
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
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
      </div>
    </div>
  );
};

export default Login;
