import { MoonLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="w-full h-80 flex justify-center items-center">
      <MoonLoader color="#d75050" size={30} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
