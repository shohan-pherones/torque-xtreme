import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useFetch } from "../hooks/useFetch";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = ({ navbarHeight }) => {
  const { id } = useParams();
  const { data: service } = useFetch(
    `${process.env.REACT_APP_XTREME_URL}/services/${id}`
  );
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleOrder = (e) => {
    e.preventDefault();

    const order = {
      name: user?.displayName,
      email: user?.email,
      phone: e.target.phone.value,
      address: e.target.address.value,
      id,
      service: service?.title,
      price: service?.price,
      time: new Date().toISOString(),
    };

    axios
      .post(`${process.env.REACT_APP_XTREME_URL}/orders`, order)
      .then((res) => {
        const { data } = res;

        if (data.insertedId) {
          toast("Your order has been placed successfully!");
          e.target.reset();
          navigate("/");
        }
      });
  };

  return (
    <div
      style={{ marginTop: `${navbarHeight}px` }}
      className="container mx-auto py-20 flex flex-col items-center gap-10"
    >
      <PageTitle title="Checkout" />
      <h2 className="text-3xl font-medium">
        Order for: {service?.title} ({currencyFormatter(+service?.price)})
      </h2>
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleOrder}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              value={user?.displayName}
              required
              readOnly
              disabled
              type="text"
              name="name"
              placeholder="Sarah Parker"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              value={user?.email}
              required
              readOnly
              disabled
              type="email"
              name="email"
              placeholder="hello@example.com"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              required
              type="tel"
              name="phone"
              placeholder="Your phone number"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              required
              type="text"
              name="address"
              placeholder="Your address"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Place your order ({currencyFormatter(+service?.price)})
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
