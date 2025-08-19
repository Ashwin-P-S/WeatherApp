import { takeLatest } from "redux-saga/effects";
import { FETCH_WEATHER_REQUEST } from "../../constants/actionTypes";
import { fetchWeatherDetails } from "../../actions/fetchWeatherDetails";

export default function* weatherDetailsSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherDetails);
}
