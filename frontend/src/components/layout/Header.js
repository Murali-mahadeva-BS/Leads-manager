import React, { Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

function Header({ auth, logout }) {
  const authenticatedLink = (
    <ul className="navbar-nav mt-2 m-2">
      {auth.isAuthenticated && (
        <li className="nav-item text-info">User: {auth.user.username}</li>
      )}
      <li className="nav-item ml-4">
        <button
          onClick={() => {
            logout();
            window.location.reload();
          }}
          className="btn btn-outline-primary"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLink = (
    <ul className="navbar-nav mt-2 ">
      <li className="nav-item ml-2">
        <Link to="/login">Login</Link>
      </li>
      <li className="nav-item ml-2">
        <Link to="/register">Register</Link>
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-sm  bg-white shadow">
        <a className="navbar-brand" href="#">
          Mylists
        </a>
        <div className="text-center">
          {!auth.isAuthenticated && (
            <span className="text-secondary ">Login to add leads</span>
          )}
        </div>

        <div className=" ml-auto">
          {auth.isAuthenticated ? authenticatedLink : guestLink}
        </div>
      </nav>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
