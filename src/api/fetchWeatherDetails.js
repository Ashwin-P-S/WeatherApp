import { call } from "redux-saga/effects";
import { requests } from "../helpers/requests";
import { API_KEY, API_URL } from "../constants/constants";

export function* fetchWeatherDetails(city) {
    try {
        const requestUrl = `${API_URL}?q=${city}&appid=${API_KEY}`;
        const response = yield call(requests.get, requestUrl);
        return response;
    } catch (error) {
        throw new Error(
            `Failed to fetch weather details for ${city}: ${error.message}`
        );
    }
}

export function* fetchWeatherDetailsUsingLocation(lat, lon) {
    try {
        const requestUrl = `${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        const response = yield call(requests.get, requestUrl);
        return response;
    } catch (error) {
        throw new Error(
            `Failed to fetch weather details for ${lat}, ${lon}: ${error.message}`
        );
    }
}
