import { combineReducers } from "redux";
import { CLEAR_STORE } from "../../constants/actionTypes";
import weatherDetailsReducer from "./weatherDetailsReducer";

const rootReducer = combineReducers({
    weatherDetailsReducer: weatherDetailsReducer,
});

const initialState = rootReducer({}, {});

const globalReducer = (state = initialState, action) => {
    if (action.type === CLEAR_STORE) {
        return initialState;
    }
    return rootReducer(state, action);
};

export default globalReducer;
