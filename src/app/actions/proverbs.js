import firebase from "firebase";
import FirebaseTools from "./../utils/firebase";

import {
  GET_LATEST_PROVERB,
  GET_LATEST_PROVERB_FAIL,
  GET_LATEST_PROVERB_SUCCESS,
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

export const getLatestProverb = () => {
  return {
    type: GET_LATEST_PROVERB
  };
};
export const getLatestProverbFail = () => {
  return { type: GET_LATEST_PROVERB_FAIL };
};
export const getLatestProverbSuccess = proverbs => {
  return { type: GET_LATEST_PROVERB_SUCCESS, proverbs };
};
