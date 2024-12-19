import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/signin" }) => {
  if (!user) return <Navigate to={redirect} />;
  return children ? children : <Outlet />;
};

export default ProtectRoute;