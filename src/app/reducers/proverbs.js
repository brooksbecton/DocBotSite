import {
  GET_PROVERBS_SUCCESS,
  GET_PROVERB_BY_ID_SUCCESS
} from "./../constants/proverbs";

const initialState = {
  currentProverbs: {}
};

export default function ProverbReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROVERB_BY_ID_SUCCESS:
      return { ...state, proverb: action.proverb };
    case GET_PROVERBS_SUCCESS:
      return { ...state, currentProverbs: action.proverbs };
    default:
      return state;
  }
}
