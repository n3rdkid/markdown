import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import rootSaga from "./root.saga";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers =
  (typeof window === "object" &&
    window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]) ||
  compose;
const sagaMiddleware = createSagaMiddleware();
const middlewares: any[] = [sagaMiddleware];
let store: any;
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middlewares));
}
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store , persistor };
