import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import AppReducer from "./slice/appReducer";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  app: AppReducer,
});

export { rootPersistConfig, rootReducer };
