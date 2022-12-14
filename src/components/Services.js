import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getServices = async () => {
      try {
        setLoading(true);
        const res = await fetch("services.json");
        if (!res.ok)
          throw new Error("Something went wrong, please try again later.");
        const data = await res.json();
        setServices(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    getServices();
  }, []);

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
