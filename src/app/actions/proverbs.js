import firebase from "firebase";
import FirebaseTools from "./../utils/firebase";

import {
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
export const saveProverbFail = () => {
  return { type: SAVE_PROVERB_FAIL };
};
export const saveProverbSuccess = () => {
  return { type: SAVE_PROVERB_SUCCESS };
};
