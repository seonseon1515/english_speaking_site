import { combineReducers } from 'redux';
import NativeFilterReducer from './NativeFilterReducer';

const rootReducer = combineReducers({
nativeFilter:NativeFilterReducer,
});

export default rootReducer