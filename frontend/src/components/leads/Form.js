import React, { useState } from "react";
import { connect } from "react-redux";
import { createLead } from "../../redux/actions";

function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const lead = { name, email, message };
    props.createLead(lead);
  };

  return (
    <div className="card card-body mt-4 mb-4">
      <h2>Add Lead</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Message">Message</label>
          <input
            type="text"
            className="form-control"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-info">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLead: (lead) => dispatch(createLead(lead)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
