import { combineReducers } from "redux";
import counter from "./counter"
const allReducers = combineReducers({
    // add more reducers here
    counter
});
export default allReducers;