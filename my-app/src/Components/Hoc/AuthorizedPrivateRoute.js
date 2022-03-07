import React from 'react'
import {useLocation, Navigate} from "react-router-dom";

function AuthorizedPrivateRoute({ children }) {
  const location = useLocation();
  if (localStorage.getItem('token')) {
    return <Navigate to="/Profile" state={{from: location}} replace />;
  }
  return children;
}

export default AuthorizedPrivateRoute;