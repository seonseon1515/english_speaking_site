import { combineReducers } from 'redux';
import NativeFilterReducer from './NativeFilterReducer';
import PostSlice from './PostSlice';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';


const rootReducer = combineReducers({
nativeFilter:NativeFilterReducer,
posts: PostSlice,
});

const persistConfig = {
  key:'root',
  storage,
  whiteList: ["PostSlice"],
}

const persistedReducer = persistReducer(persistConfig, rootReducer);



export default persistedReducer ;
// export const persistor = persistStore(store);