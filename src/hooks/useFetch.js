import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok)
          throw new Error("Something went wrong, please try again later.");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };

    getData();
  }, [url]);

  return { data, loading, error };
};
