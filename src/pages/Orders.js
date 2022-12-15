import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import PageTitle from "../components/PageTitle";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Orders = ({ navbarHeight }) => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/orders?email=${user.email}`
      );
      setOrders(data);
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
                <td>{order.title}</td>
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
