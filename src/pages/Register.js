import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import SocialLogin from "../components/SocialLogin";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";

const Register = ({ navbarHeight }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error2] = useUpdateProfile(auth);

  const navigate = useNavigate();

  let errorEl;

  if (error || error2) {
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
    toast.success("Account created successfully!");
  }

  if (loading || updating) {
    return <Spinner />;
  }

  const handleRegister = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("update profile");
    navigate("/");

    setName("");
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
          <h1 className="text-5xl font-bold">Register</h1>
          <p className="py-6">
            Create your account, and get our amazing services today.
          </p>
        </div>
        <SocialLogin label="Continue" />
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
            <div className="form-control">
              <label className="cursor-pointer label justify-start gap-2">
                <input
                  type="checkbox"
                  value={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="checkbox checkbox-info"
                />
                <span className="label-text">
                  Accept our terms and conditions
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn ${isChecked ? "btn-primary" : "btn-disabled"}`}
              >
                Create account
              </button>
              <p className="pt-2">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-info underline underline-offset-2 hover:text-secondary font-medium"
                >
                  Login
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

export default Register;
