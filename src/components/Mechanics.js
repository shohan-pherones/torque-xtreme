import Mechanic from "./Mechanic";
import { useFetch } from "../hooks/useFetch";

const Mechanics = () => {
  const { data: mechanics, loading, error } = useFetch("mechanics.json");

  return (
    <div id="#mechanics" className="container mx-auto py-20">
      <h2 className="text-center mb-10 text-4xl font-semibold">
        Our Mechanics
      </h2>
      <div className="flex flex-wrap gap-10 justify-center">
        {loading ? (
          <p>{error ? error : "Loading..."}</p>
        ) : (
          mechanics?.map((mechanic) => (
            <Mechanic key={mechanic.id} mechanic={mechanic} />
          ))
        )}
      </div>
    </div>
  );
};

export default Mechanics;
