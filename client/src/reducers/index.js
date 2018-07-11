import { combineReducers } from "redux";
import chainReducer from "./chainReducer";

export default combineReducers({
  chain: chainReducer
});
