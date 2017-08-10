import { call, put, takeEvery } from "redux-saga/effects";
import { getLatestProverbSuccess } from "./../actions/proverbs";
import { GET_LATEST_PROVERB } from "./../constants/proverbs";
import FirebaseTools from "./../utils/firebase";

export function getLastProverbs(proverbAmount = 10) {
  return FirebaseTools.getDatabaseReference("doc/proverbs/")
    .limitToFirst(10)
    .once("value");
}

export function* getLatestProverb() {
  const snapshot = yield call(getLastProverbs, 10);
  const proverbs = snapshot.val();
  console.log(proverbs);
  yield put(getLatestProverbSuccess(proverbs));
}

export function* getLatestProverbWatcher() {
  yield takeEvery(GET_LATEST_PROVERB, getLatestProverb);
}
