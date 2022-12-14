import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Register = ({ navbarHeight }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }

  const handleRegister = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">
            Create your account, and get our amazing services today.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Natasha Jennie"
                className="input input-bordered"
              />
            </div>
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
                Create account
              </button>
              <p className="pt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-info underline underline-offset-2 hover:text-secondary"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
