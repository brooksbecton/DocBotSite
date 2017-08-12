import { GET_PROVERBS_SUCCESS } from "./../constants/proverbs";

const initialState = {
  currentProverbs: []
};

export default function ProverbReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROVERBS_SUCCESS:
      return { ...state, currentProverbs: action.proverbs };
    default:
      return state;
  }
}
