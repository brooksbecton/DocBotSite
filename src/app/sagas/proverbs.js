import { call, put, takeEvery } from "redux-saga/effects";
import { getLatestProverbSuccess } from "./../actions/proverbs";
import { GET_LATEST_PROVERB } from "./../constants/proverbs";
import FirebaseTools from "./../utils/firebase";

export function getLastProverbs(proverbAmount = 10) {
  return FirebaseTools.getDatabaseReference("doc/proverbs/")
    .limitToFirst(proverbAmount)
    .once("value");
}

export function* getLatestProverb() {
  const snapshot = yield call(getLastProverbs, 10);
  const proverbs = snapshot.val();
  yield put(getLatestProverbSuccess(proverbs));
}

export function* getLatestProverbWatcher() {
  yield takeEvery(GET_LATEST_PROVERB, getLatestProverb);
}
