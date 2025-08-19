import {
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
} from "../../constants/actionTypes";

const initialState = {
    weather: {},
    loading: false,
    error: {},
};

const weatherDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
            };
        case FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default weatherDetailsReducer;
