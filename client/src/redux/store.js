import { createStore, compose, applyMiddleware } from "redux";
import {thunk} from "redux-thunk"; 
import rootReducer from "./reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 

const persistConfig = {
  key: "authType",
  storage: storage,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   pReducer,
//   // composeEnhancers(applyMiddleware(thunk)) 
// );
const store = createStore(pReducer, compose(applyMiddleware(thunk),composeEnhancers));

const persistor = persistStore(store);
export { persistor, store };
