import profileSlice from "./profileSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist"

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "profile"
    ]
}
const rootReducer = combineReducers({
    profile:profileSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    devTools:process.env.NODE_ENV !== "production",
    middleware: [thunk]
})
export const persistor = persistStore(store)