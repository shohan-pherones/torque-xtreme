import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ServiceDetail = ({ navbarHeight }) => {
  const { id } = useParams();

  const { data: service, loading, error } = useFetch(`url/${id}`);

  return (
    <div style={{ marginTop: `${navbarHeight}px` }}>
      <h2>ServiceDetail: {id}</h2>
      <Link to="/checkout" className="btn btn-secondary">
        Checkout
      </Link>
    </div>
  );
};

export default ServiceDetail;
