import { Link } from "react-router-dom";

const NotFound = ({ navbarHeight }) => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-8xl font-bold">404</h1>
          <p className="py-6 text-xl">
            Page not found, please get back to home.
          </p>
          <Link to="/" className="btn btn-primary text-xl">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
