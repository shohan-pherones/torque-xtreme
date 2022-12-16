import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import PageTitle from "../components/PageTitle";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Orders = ({ navbarHeight }) => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_XTREME_URL}/orders?email=${user?.email}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setOrders(data);
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          toast.error(`You're logged out due to ${err.message}`);
          signOut(auth);
          navigate("/login");
        }
      }
    };

    getOrders();
  }, [user]);

  return (
    <div
      style={{ marginTop: `${navbarHeight}px` }}
      className="container mx-auto py-20 flex flex-col items-center gap-10"
    >
      <PageTitle title="Orders" />
      <h2 className="text-3xl font-medium">Your Orders</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Date</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, i) => (
              <tr key={order._id}>
                <th>{i + 1}</th>
                <td>{new Date(order.time).toLocaleDateString()}</td>
                <td>{order.service}</td>
                <td>{currencyFormatter(+order?.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
