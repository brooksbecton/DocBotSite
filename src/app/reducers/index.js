import { combineReducers } from "redux";
import FireBaseUserReducer from "./firebase_user_reducer";
import ProverbReducer from "./proverbs";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  currentUser: FireBaseUserReducer,
  proverbs: ProverbReducer,
  form: formReducer
});

export default rootReducer;
