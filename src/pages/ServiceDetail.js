import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { currencyFormatter } from "../utilities/currencyFormatter";
import PageTitle from "../components/PageTitle";

const ServiceDetail = ({ navbarHeight }) => {
  const { id } = useParams();

  const { data: service } = useFetch(`http://localhost:5000/services/${id}`);

  return (
    <div
      className="hero min-h-screen bg-base-100 py-20"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <PageTitle title={service?.title || "Service Details"} />
      <div className="hero-content flex-col gap-10 items-start">
        <img
          src={service?.image}
          alt={service?.title}
          className="rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{service?.title}</h1>
          <p className="py-6 text-lg">{service?.description}</p>
          <div className="flex gap-10 items-center">
            <span className="text-2xl font-semibold">
              {currencyFormatter(+service?.price)}
            </span>
            <Link to="/checkout" className="btn btn-secondary">
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
