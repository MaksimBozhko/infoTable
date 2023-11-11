import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { usersSlice, usersApi } from './slices/users';

const rootReducer = combineReducers({
  users: usersSlice,
  [usersApi.reducerPath]: usersApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore['dispatch'];
