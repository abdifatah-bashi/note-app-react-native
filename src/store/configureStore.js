import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import NoteReducer from "./reducers/NoteReducer";

const rootReducer = combineReducers({
  noteReducer : NoteReducer
})

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore  = ()=> {
  return createStore(rootReducer , composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;
