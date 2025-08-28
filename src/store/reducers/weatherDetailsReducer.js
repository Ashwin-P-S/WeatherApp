import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
    SET_ERROR,
    FETCH_WEATHER_REQUEST_LOCATION,
} from "../../constants/actionTypes";

const initialState = {
    weather: null,
    loading: false,
    error: null,
};

const weatherDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_REQUEST:
        case FETCH_WEATHER_REQUEST_LOCATION:
            return {
                ...state,
                loading: true,
                error: {},
            };
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
                loading: false,
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherDetailsReducer;
