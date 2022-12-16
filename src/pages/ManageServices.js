import { toast } from "react-toastify";
import { useFetch } from "../hooks/useFetch";
import { currencyFormatter } from "../utilities/currencyFormatter";
import PageTitle from "../components/PageTitle";

const ManageServices = ({ navbarHeight }) => {
  const { data: services, setData: setServices } = useFetch(
    `${process.env.REACT_APP_XTREME_URL}/services`
  );

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete this service?");

    if (proceed) {
      fetch(`${process.env.REACT_APP_XTREME_URL}/services/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success("Service deleted successfully!");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };

  return (
    <div
      style={{ marginTop: `${navbarHeight}px` }}
      className="container mx-auto py-20 flex flex-col items-center gap-10"
    >
      <PageTitle title="Manage Services" />
      <h2 className="text-3xl font-medium">Manage Services</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {services?.map((service, i) => (
              <tr key={service._id}>
                <th>{i + 1}</th>
                <td>{service._id}</td>
                <td>{service.title}</td>
                <td>{currencyFormatter(+service.price)}</td>
                <th>
                  <button
                    onClick={() => handleDelete(service._id)}
                    className={`btn btn-outline ${i <= 8 && "btn-disabled"}`}
                  >
                    {i <= 8 ? "Admin Control" : "Delete"}
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServices;
