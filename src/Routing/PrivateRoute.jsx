import { Navigate } from "react-router-dom";
import { decryptData } from "../Components/Pages/Contact/Encryption";

const PrivateRoute = ({ children }) => {
  const user = decryptData("loggedInUser");
  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
