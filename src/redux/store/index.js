import { combineReducers, configureStore } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import userReducer from "../reducer/userReducer";
import clientReducer from "../reducer/clientReducer";
import meReducer from "../reducer/me";
import addressReducer from "../reducer/addressReducer";
import fattureReducer from "../reducer/fatturaReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  userToken: userReducer,
  clients: clientReducer,
  address: addressReducer,
  me: meReducer,
  fatture: fattureReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // reducer
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
