import { call, put, takeEvery } from "redux-saga/effects";
import { getProverbsSuccess } from "./../actions/proverbs";
import { GET_PROVERBS } from "./../constants/proverbs";
import FirebaseTools from "./../utils/firebase";

export function getLastProverbs(proverbAmount = 10) {
  return FirebaseTools.getDatabaseReference("doc/proverbs/")
    .limitToFirst(proverbAmount)
    .once("value");
}

export function* getProverbs({ amount }) {
  const snapshot = yield call(getLastProverbs, amount);
  const proverbs = snapshot.val();
  yield put(getProverbsSuccess(proverbs));
}

export function* getProverbsWatcher() {
  yield takeEvery(GET_PROVERBS, getProverbs);
}
