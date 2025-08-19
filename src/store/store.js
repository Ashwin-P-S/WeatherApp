import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import weatherReducer from "./reducers/weatherDetailsReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middleware.push(logger);
}

const store = createStore(
    weatherReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;
