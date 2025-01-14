import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
  
  const {user} = useContext(AuthContext);
  
  if(user){
    return children;
  }

  return <Navigate to="/login" />
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.element
}