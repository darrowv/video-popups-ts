import { all, call, put, takeEvery } from "redux-saga/effects";
import { FETCH_EVENTS, setEvents } from "./actions";

function* fetchEventsSaga(): Generator<any, void, Response> {
  try {
    const response = yield call(
      fetch,
      "https://run.mocky.io/v3/d5dea963-2802-4856-9cab-378fdba1283d",
    );
    const data = yield response.json();
    yield put(setEvents(data));
  } catch (error) {
    console.error(error);
  }
}

function* watchFetchEvents() {
  yield takeEvery(FETCH_EVENTS, fetchEventsSaga);
}

export default function* rootSaga() {
  yield all([watchFetchEvents()]);
}
