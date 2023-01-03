import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import loginReducer from './reducers/login.slice';
import alertSlice from "./reducers/alert.slice";
import thunk from "redux-thunk";
import loaderSlice from "./reducers/loader.slice";
import savePromoterSlice from "./reducers/savePromoter";
import activeStepSlice from "./reducers/activeStep.slice";
import saveCampaignSlice from "./reducers/saveCampaign";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
 
const persistConfig = {
    key: "root",
    storage,
  
  };

  const rootReducer = combineReducers({
    login: loginReducer,
    newAlert: alertSlice,
    Custom_API_Loader: loaderSlice,
    savePromoter: savePromoterSlice,
    saveCampaign: saveCampaignSlice,
    activeStep: activeStepSlice,
  });

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
  });

export const persistor = persistStore(store);


