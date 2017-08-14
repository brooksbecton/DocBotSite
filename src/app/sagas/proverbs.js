import { call, put, takeEvery } from "redux-saga/effects";
import {
  getProverbsSuccess,
  getProverbByIdSuccess
} from "./../actions/proverbs";
import { GET_PROVERB_BY_ID, GET_PROVERBS } from "./../constants/proverbs";
import FirebaseTools from "./../utils/firebase";

export function getProverbById(id) {
  return FirebaseTools.getDatabaseReference(`doc/proverbs/${id}`).once("value");
}

export function* getProverbByIdDriver({ id }) {
  const snapshot = yield call(getProverbById, id);
  const proverb = snapshot.val();
  yield put(getProverbByIdSuccess(proverb));
}

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

export function* getProverbByIdWatcher() {
  yield takeEvery(GET_PROVERB_BY_ID, getProverbByIdDriver);
}
