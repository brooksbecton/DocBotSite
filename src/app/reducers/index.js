import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import FireBaseUserReducer from "./firebase_user_reducer";
import ProverbReducer from "./proverbs";

const rootReducer = combineReducers({
  currentUser: FireBaseUserReducer,
  proverbs: ProverbReducer,
  form: formReducer
});

export default rootReducer;
