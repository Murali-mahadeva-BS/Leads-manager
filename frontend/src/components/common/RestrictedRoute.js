import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const RestrictedRoute = ({ component: Component, auth, ...rest }) => (
  <React.Fragment>
    {console.log("before" + JSON.stringify(auth))}
    <Route
      {...rest}
      render={(props) => {
        {
          console.log(JSON.stringify(auth));
        }
        if (auth.isLoading) {
          return <h3>loading...</h3>;
        } else if (!auth.isAuthenticated) {
          return <Redirect to="/login" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  </React.Fragment>
);

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUser: () => dispatch(loadUser()),
//   };
// };
export default connect(mapStateToProps)(RestrictedRoute);
