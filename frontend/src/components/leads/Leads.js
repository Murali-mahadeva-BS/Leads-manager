import React, { useEffect } from "react";
import { fetchLeads, deleteLead } from "../../redux/actions";
import { connect } from "react-redux";

function Leads({ leads, fetchLeads, deleteLead }) {
  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <React.Fragment>
      <h2>Leads</h2>
      {/* <p>{JSON.stringify(leads.leads)}</p> */}

      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {leads.leads.map(({ id, name, email, message }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{email}</td>
              <td>{message}</td>
              <td>
                <button
                  onClick={() => deleteLead(id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    leads: state.leads,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLeads: () => dispatch(fetchLeads()),
    deleteLead: (id) => dispatch(deleteLead(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Leads);
