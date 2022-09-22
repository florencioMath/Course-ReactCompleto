import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext";

const Protectedroute = ({ children }) => {
  const { login } = useContext(UserContext);

  return login ? children : <Navigate to="/login" />;
};

export default Protectedroute;
