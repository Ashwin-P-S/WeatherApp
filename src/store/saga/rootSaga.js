import { all } from "redux-saga/effects";
import weatherDetailsSaga from "./weatherDetailsSaga";

export default function* rootSaga() {
    yield all([weatherDetailsSaga()]);
}
