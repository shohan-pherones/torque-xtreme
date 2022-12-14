import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const ServiceDetail = ({ navbarHeight }) => {
  const { id } = useParams();

  const { data: service, loading, error } = useFetch(`url/${id}`);

  return <div style={{ marginTop: `${navbarHeight}px` }}>ServiceDetail</div>;
};

export default ServiceDetail;
