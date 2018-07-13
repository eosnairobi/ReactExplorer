import { combineReducers } from "redux";
import chainReducer from "./chainReducer";
import coinMarketCap from "./coinMarketCap";
import historyReducer from "./historyReducer";

export default combineReducers({
  chain: chainReducer,
  coin: coinMarketCap,
  history: historyReducer
});
