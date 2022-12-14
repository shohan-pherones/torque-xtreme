import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const currencyFormatter = (price) => {
    return price?.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <figure>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{service.title}</h2>
        <p>{service.description?.substring(0, 100)}...</p>
        <div className="card-actions justify-between items-center">
          <h2 className="card-title">{currencyFormatter(service.price)}</h2>
          <Link to={`/service/${service._id}`} className="btn btn-secondary">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
