import { takeLatest } from "redux-saga/effects";
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_REQUEST_LOCATION } from "../../constants/actionTypes";
import { fetchWeatherDetails, fetchWeatherDetailsUsingLocation } from "../../actions/fetchWeatherDetails";

export function* weatherDetailsSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherDetails);
}

export function* weatherDetailsUsingLocationSaga() {
    yield takeLatest(FETCH_WEATHER_REQUEST_LOCATION, fetchWeatherDetailsUsingLocation);
}