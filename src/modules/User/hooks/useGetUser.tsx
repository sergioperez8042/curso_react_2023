import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context";
import { getUser } from "../services/UserServices/index.service";
import { IUser } from "../models/user/user";

export const useGetUsers = () => {
  const [user, setUser] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(AppContext);

  const handleGetUser = async () => {
    setLoading(true);
    try {
      const result = await getUser();
      setUser(result.data);
      setData({ ...data, users: result.data });

    } catch (error) {
      setError(error.message);

    }
    setLoading(false);
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  return { user, loading, error };
};

export const useGetUser = (id: string) => {
  const [loading, setSloading] = useState<boolean>(false);
  const [error, setError] = useState();
  const { data, setData } = useContext(AppContext);
  const handleGetUser = () => {
    setSloading(true);
    try {
      const result = data.users.find((element) => element.id.toString() === id);

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      setData({ ...data, user: result! });
      setSloading(false);
    } catch (error) {
      setError(error.message);
      setSloading(false);
    }
  };
  useEffect(() => {
    handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loading, error };
};
