import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user/user';
import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
let rootReducer = combineReducers({
  user: userSlice,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    });

    return middlewares;
  },
});
