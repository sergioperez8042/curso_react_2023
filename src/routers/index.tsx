import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { lazy } from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { Home } from "../pages/home/Home";
const UseRouter = lazy(() => import('../modules/User/routers/'));

export const RootRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuOptions = [
    { key: "1", path: "/", name: "Home" },
    { key: "2", path: "/users", name: "Users" }
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const shouldShowNavBar = location.pathname !== "/";

  return (
    <>
      {shouldShowNavBar && (
        <NavBar navigate={handleNavigate} menuOptions={menuOptions} username={""} />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/users/*"
          element={

            <UseRouter />

          }
        />
      </Routes>
    </>
  );
};
