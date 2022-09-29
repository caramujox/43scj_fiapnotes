import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import noteState from "./ducks/notes/notes.reducer";
import { NoteState } from "./ducks/notes/notes.types";
import createRootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";

export interface ApplicationState {
  noteState: NoteState;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(createRootReducer(), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
