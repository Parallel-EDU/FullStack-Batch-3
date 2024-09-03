import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import filterReducer from "./filterreducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  filter: filterReducer,
});

export default rootReducer;
