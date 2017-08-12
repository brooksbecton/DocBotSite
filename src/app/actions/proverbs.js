import FirebaseTools from "./../utils/firebase";

import {
  GET_PROVERBS,
  GET_PROVERBS_FAIL,
  GET_PROVERBS_SUCCESS,
  SAVE_PROVERB,
  SAVE_PROVERB_FAIL,
  SAVE_PROVERB_SUCCESS
} from "./../constants/proverbs";

export const saveProverb = proverbText => {
  const request = FirebaseTools.pushDbDate("ProposedProverbs/", {
    text: proverbText
  });
  return { type: SAVE_PROVERB, request };
};
export const saveProverbFail = () => ({ type: SAVE_PROVERB_FAIL });
export const saveProverbSuccess = () => ({ type: SAVE_PROVERB_SUCCESS });

export const getProverbs = amount => ({
  type: GET_PROVERBS,
  amount
});
export const getProverbsFail = () => ({ type: GET_PROVERBS_FAIL });
export const getProverbsSuccess = proverbs => ({
  type: GET_PROVERBS_SUCCESS,
  proverbs
});
