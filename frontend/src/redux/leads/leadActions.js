import axios from "axios";
import {
  // fetchLeads
  FETCH_LEADS_REQUEST,
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_FAILURE,
  // delteLead
  DELETE_LEAD_REQUEST,
  DELETE_LEAD_SUCCESS,
  DELETE_LEAD_FAILURE,
  // createLead
  CREATE_LEAD_REQUEST,
  CREATE_LEAD_SUCCESS,
  CREATE_LEAD_FAILURE,
} from "./leadTypes";

// FETCH LEADS
export const fetchLeads = () => {
  return (dispatch, getState) => {
    dispatch({
      type: FETCH_LEADS_REQUEST,
    });
    //   get toke from state
    const token = getState().auth.token;
    //   headers for the api call
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    axios
      .get("api/leads/", config)
      .then((res) => {
        dispatch({
          type: FETCH_LEADS_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: FETCH_LEADS_FAILURE,
          payload: err.message,
        });
      });
  };
};

// DELETE LEADS
export const deleteLead = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: DELETE_LEAD_REQUEST,
    });
    //   get toke from state
    const token = getState().auth.token;
    //   headers for the api call
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }

    axios
      .delete(`/api/leads/${id}`, config)
      .then((res) => {
        dispatch({
          type: DELETE_LEAD_SUCCESS,
          payload: id,
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_LEAD_FAILURE,
          payload: err.message,
        });
      });
  };
};

export const createLead = ({ name, email, message }) => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_LEAD_REQUEST,
    });
    //   get toke from state
    const token = getState().auth.token;
    //   headers for the api call
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (token) {
      config.headers["Authorization"] = `Token ${token}`;
    }
    const lead = JSON.stringify({ name, email, message });
    console.log(lead);
    console.log(config);
    axios
      .post("/api/leads/", lead, config)
      .then((res) => {
        dispatch({
          type: CREATE_LEAD_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: CREATE_LEAD_FAILURE,
          payload: err.message,
        });
      });
  };
};
