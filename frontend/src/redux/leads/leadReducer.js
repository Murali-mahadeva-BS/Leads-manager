import {
  // fetch leads
  FETCH_LEADS_REQUEST,
  FETCH_LEADS_SUCCESS,
  FETCH_LEADS_FAILURE,
  // delete leads
  DELETE_LEAD_REQUEST,
  DELETE_LEAD_SUCCESS,
  DELETE_LEAD_FAILURE,
  // create leads
  CREATE_LEAD_REQUEST,
  CREATE_LEAD_SUCCESS,
  CREATE_LEAD_FAILURE,
} from "./leadTypes";

const initialState = {
  loading: false,
  leads: [],
  error: "",
};

const some = null;

const leadsReducer = (state = initialState, action) => {
  switch (action.type) {
    // fetch leads
    case FETCH_LEADS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LEADS_SUCCESS:
      return {
        loading: false,
        leads: action.payload,
        error: "",
      };
    case FETCH_LEADS_FAILURE:
      return {
        loading: false,
        leads: [],
        error: action.payload,
      };
    // delete leads
    case DELETE_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_LEAD_SUCCESS:
      return {
        loading: false,
        leads: state.leads.filter((lead) => lead.id !== action.payload),
        error: "",
      };
    case DELETE_LEAD_FAILURE:
      return {
        loading: false,
        leads: [],
        error: action.payload,
      };
    // create lead
    case CREATE_LEAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_LEAD_SUCCESS:
      return {
        loading: false,
        leads: [...state.leads, action.payload],
        error: "",
      };
    case CREATE_LEAD_FAILURE:
      return {
        loading: false,
        leads: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default leadsReducer;
