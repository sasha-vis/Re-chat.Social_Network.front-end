import React from 'react'
import {useLocation, Navigate} from "react-router-dom";
import { connect } from 'react-redux'

function AuthorizedPrivateRoute({ children, isLog }) {
  const location = useLocation();
  if (isLog.isLog === true) {
    return <Navigate to="/Profile" state={{from: location}} replace />;
  }
  return children;
}

const mapStateToProps = state => ({
  isLog: state.isLog
})

export default connect(mapStateToProps)(AuthorizedPrivateRoute)