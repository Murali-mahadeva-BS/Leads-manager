import { combineReducers } from "redux";
import leadsReducer from "./leads/leadReducer";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
  leads: leadsReducer,
  auth: authReducer,
});

export default rootReducer;
