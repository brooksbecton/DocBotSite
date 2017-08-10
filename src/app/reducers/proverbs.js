import { GET_LATEST_PROVERB_SUCCESS } from "./../constants/proverbs";

const initialState = {
  currentProverbs: [],
  promise: {}
};

export default function ProverbReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LATEST_PROVERB_SUCCESS:
      return { ...state, currentProverbs: action.proverbs };
    default:
      return state;
  }
}
