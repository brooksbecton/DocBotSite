import { combineReducers } from "redux";
import FireBaseUserReducer from "./firebase_user_reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  currentUser: FireBaseUserReducer,
  form: formReducer
});

export default rootReducer;
