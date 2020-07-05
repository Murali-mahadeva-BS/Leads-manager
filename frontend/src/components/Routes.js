import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Routes({ auth }) {
  return (
    <React.Fragment>
      {!auth.isAuthenticated ? <Redirect to="/login" /> : <Redirect to="/" />}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Routes);
