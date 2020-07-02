import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }
  render() {
    return (
      <React.Fragment>
        <h1>Leads lists</h1>
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
            {this.props.leads.map((lead) => {
              <tr key={lead.id}>'hello'</tr>;
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  leads: state.leads.leads;
};

export default connect(mapStateToProps, { getLeads })(Leads);
