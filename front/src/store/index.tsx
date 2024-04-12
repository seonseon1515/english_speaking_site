import { combineReducers } from 'redux';
import NativeFilterReducer from './NativeFilterReducer';
import PostSlice from './PostSlice';

const rootReducer = combineReducers({
nativeFilter:NativeFilterReducer,
posts: PostSlice,
});

export default rootReducer