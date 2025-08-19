import { call, put } from "redux-saga/effects";
import { fetchWeatherDetails as fetchWeatherDetailsApi } from "../api/fetchWeatherDetails";
import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "../constants/actionTypes";

export function* fetchWeatherDetails(action) {
    try {
        const { city } = action.payload;
        const response = yield call(fetchWeatherDetailsApi, city);
        yield put({
            type: FETCH_WEATHER_SUCCESS,
            payload: response,
        });
    } catch (error) {
        yield put({
            type: FETCH_WEATHER_FAILURE,
            payload: error.message,
        });
    }
}
