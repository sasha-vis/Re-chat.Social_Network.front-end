import React from 'react'
import {useLocation, Navigate} from "react-router-dom";

function PrivateRoute({ children }) {
  const location = useLocation();
  if (!localStorage.getItem('token')) {
    return <Navigate to="/SignIn" state={{from: location}} replace />;
  }
  return children;
}

export default PrivateRoute;