import { combineReducers } from "redux";
import noteState from "./notes/notes.reducer";

const createRootReducer = () =>
  combineReducers({
    noteState,
  });

export default createRootReducer;
