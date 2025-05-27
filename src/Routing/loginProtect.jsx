import { Navigate } from "react-router-dom";
import { decryptData } from "../Components/Pages/Contact/Encryption";

const LoginRedirectGuard = ({ children }) => {
  const user = decryptData("loggedInUser");
  return user ? <Navigate to="/home" replace /> : children;
};

export default LoginRedirectGuard;
