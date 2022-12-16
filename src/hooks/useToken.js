import axios from "axios";
import { useEffect, useState } from "react";

export const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          `${process.env.REACT_APP_XTREME_URL}/login`,
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };

    getToken();
  }, [user]);

  return [token];
};
