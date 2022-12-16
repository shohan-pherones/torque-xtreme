import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import PageTitle from "../components/PageTitle";

const AddService = ({ navbarHeight }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const url = "process.env.REACT_APP_XTREME_URL/services";

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => toast.success(`${data.title} service added!`));

    reset();
  };

  return (
    <div
      style={{ marginTop: `${navbarHeight}px` }}
      className="container mx-auto py-20 flex flex-col gap-10 items-center"
    >
      <PageTitle title="Add Service" />
      <h2 className="text-center text-3xl font-medium">Add a service</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-xl w-full"
      >
        <input
          {...register("title")}
          placeholder="Service title"
          className="p-3 rounded-md shadow"
        />
        <input
          {...register("image")}
          placeholder="Service image url"
          className="p-3 rounded-md shadow"
        />
        <textarea
          {...register("description")}
          placeholder="Service description"
          className="p-3 rounded-md resize-none shadow"
          rows={10}
        />
        <input
          type="number"
          {...register("price")}
          placeholder="Service price"
          className="p-3 rounded-md shadow"
        />
        <input type="submit" value="Add service" className="btn shadow" />
      </form>
    </div>
  );
};

export default AddService;
