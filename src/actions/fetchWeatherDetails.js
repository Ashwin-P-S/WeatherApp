import { call, put } from "redux-saga/effects";
import { 
    fetchWeatherDetails as fetchWeatherDetailsApi,
    fetchWeatherDetailsUsingLocation as fetchWeatherDetailsUsingLocationApi
} from "../api/fetchWeatherDetails";
import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "../constants/actionTypes";

export function* fetchWeatherDetails(action) {
    try {
        const { city } = action.payload;
        const response = yield call(fetchWeatherDetailsApi, city);
        if (!response.data) {
            throw new Error("Error: City not found");
        }
        yield put({
            type: FETCH_WEATHER_SUCCESS,
            payload: response.data,
        });        
    } catch (error) {
        yield put({
            type: FETCH_WEATHER_FAILURE,
            payload: error,
        });
    }
}

export function* fetchWeatherDetailsUsingLocation(action) {
    try {
        const { lat, lon } = action.payload;
        const response = yield call(fetchWeatherDetailsUsingLocationApi, lat, lon);
        if (!response.data) {
            throw new Error("Error: City not found");
        }
        yield put({
            type: FETCH_WEATHER_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: FETCH_WEATHER_FAILURE,
            payload: error,
        });
    }
}
