import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import Logo from "../assets/images/logo.png";

const Navbar = ({ setNavbarHeight }) => {
  const navbarRef = useRef(null);

  const [user] = useAuthState(auth);

  useEffect(() => {
    const height = navbarRef.current.getBoundingClientRect().height;
    setNavbarHeight(height);
  }, []);

  const handleLogout = () => {
    signOut(auth);
    toast.info("You're logged out!");
  };

  return (
    <div
      className="navbar bg-base-100 fixed z-[99] w-full top-0 left-0 right-0 shadow-md"
      ref={navbarRef}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to="/add-service">Add Service</Link>
                </li>
                <li>
                  <Link to="/manage-services">Manage Services</Link>
                </li>
                <li>
                  <Link to="/orders">Orders</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/mechanics">Mechanics</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} alt="Torque Xtreme logo" className="h-full" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          {user && (
            <>
              <li>
                <Link to="/add-service">Add Service</Link>
              </li>
              <li>
                <Link to="/manage-services">Manage Services</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </>
          )}
          <li>
            <Link to="/mechanics">Mechanics</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-5">
        {user?.displayName && (
          <p className="font-medium hidden sm:inline-block">
            Hello, {user.displayName}
          </p>
        )}
        {user ? (
          <button onClick={handleLogout} className="btn btn-secondary">
            Logout
          </button>
        ) : (
          <Link to="/login" className="btn btn-accent">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
