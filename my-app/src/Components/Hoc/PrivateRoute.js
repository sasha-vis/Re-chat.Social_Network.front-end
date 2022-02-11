import React from 'react'
import {useLocation, Navigate} from "react-router-dom";
import { connect } from 'react-redux'

function PrivateRoute({ children, isLog }) {
  const location = useLocation();
  if (isLog.isLog === false) {
    return <Navigate to="/SignIn" state={{from: location}} replace />;
  }
  return children;
}

const mapStateToProps = state => ({
  isLog: state.isLog
})

export default connect(mapStateToProps)(PrivateRoute)