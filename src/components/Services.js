import Service from "./Service";
import { useFetch } from "../hooks/useFetch";

const Services = () => {
  const {
    data: services,
    loading,
    error,
  } = useFetch(`${process.env.REACT_APP_XTREME_URL}/services`);

  return (
    <div id="services" className="container mx-auto py-20">
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
