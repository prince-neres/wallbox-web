import { Navigate } from "react-router-dom";
import { selectUser } from "../store/user/userSlice";
import { useSelector } from "react-redux";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { userInfo } = useSelector(selectUser);
  return userInfo?.token ? children : <Navigate to="/login" replace />;
}
