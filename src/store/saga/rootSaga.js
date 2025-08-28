import { all } from "redux-saga/effects";
import { weatherDetailsSaga, weatherDetailsUsingLocationSaga } from "./weatherDetailsSaga";

export default function* rootSaga() {
    yield all([weatherDetailsSaga(), weatherDetailsUsingLocationSaga()]);
}
