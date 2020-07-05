import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../../redux/actions";
import { connect } from "react-redux";

function Login({ isAuthenticated, login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    // console.log(username, password);
  };

  return (
    <React.Fragment>
      {isAuthenticated && <Redirect to="/" />}
      <div className="col-md-6 m-auto ">
        <div className="card card-body shadow mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="Username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>

            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-info">
                Login
              </button>
            </div>
            <p>
              Dont have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
