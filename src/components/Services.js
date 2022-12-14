import Service from "./Service";
import { useFetch } from "../hooks/useFetch";

const Services = () => {
  const { data: services, loading, error } = useFetch("services.json");

  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center mb-10 text-4xl font-semibold">Our Services</h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {loading ? (
          <p>{error ? error : "Loading..."}</p>
        ) : (
          services?.map((service) => (
            <Service key={service.id} service={service} />
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
