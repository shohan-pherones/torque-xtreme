import Service from "./Service";
import { useFetch } from "../hooks/useFetch";

const Services = ({ navbarHeight }) => {
  const {
    data: services,
    loading,
    error,
  } = useFetch("http://localhost:5000/services");

  return (
    <div
      className="container mx-auto py-20"
      style={{ marginTop: `${navbarHeight}px` }}
    >
      <h2 className="text-center mb-10 text-4xl font-semibold">Our Services</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {loading ? (
          <p>{error ? error : "Loading..."}</p>
        ) : (
          services?.map((service) => (
            <Service key={service._id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
