import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

import { fetchSucceded, fetchFailed } from './users/redux';
import { FETCH_USERS_REQUESTED } from './users/redux';

function* fetchUsers(action) {
  try {
     const users = yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json());

     yield put(fetchSucceded(users.slice(0, 5)));
  } catch (e) {
     yield put(fetchFailed());
  }
}

function* usersWatcher() {
  yield takeLatest(FETCH_USERS_REQUESTED, fetchUsers);
}

export default function* rootSaga() {
  yield all([
    usersWatcher()
  ]);
}
