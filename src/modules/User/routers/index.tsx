import { Routes, Route, Navigate } from "react-router-dom";
import { AppContext, IAppContext } from "../../../context";
import { useState } from "react";
import { UserCreate } from "../../../pages/User/UserCreate";
import { UserDetail } from "../../../pages/User/UserDetail";
import { UserList } from "../../../pages/User/UserList";
import { UserUpdate } from "../../../pages/User/UserUpdate";
const UseRouter = () => {
  const [data, setData] = useState<IAppContext>({
    users: [],
    user: {
      id: 0,
      name: "",
      username: "",
      email: "",
      phone: "",
      website: "",
      company: {
        name: "",
        catchPhrase: "",
        bs: "",
      },
      address: {
        city: "",
        street: "",
        suite: "",
        zipcode: "",
        geo: {
          lat: "",
          lng: "",
        },
        },
      },
    },
    );
    const [loading, setLoading] = useState<boolean>(false);
  return (
    <AppContext.Provider value={{ data, setData, loading, setLoading }}>
      <Routes>
        <Route index element={<UserList />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="update" element={<UserUpdate />} />
        <Route path=":id" element={<UserDetail />} />
        <Route path={"*"} element={<Navigate to={"/users"} replace />} />
      </Routes>
    </AppContext.Provider>
  );
};

export default UseRouter;
