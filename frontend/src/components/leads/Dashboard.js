import React from "react";
import Form from "./Form";
import Leads from "./Leads";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function Dashboard({ auth }) {
  return (
    <React.Fragment>
      <Form />
      <Leads />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps)(Dashboard);
