import {combineReducers, configureStore} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import {persistReducer, persistStore} from "redux-persist"
import profileSlice from "./profileSlice"
import {cartSlice} from "./cartSlice"

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["profile"]
}

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  profile: profileSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
})

export const persistor = persistStore(store)
