import {configureStore} from '@reduxjs/toolkit';
import {userAPI} from './userAPI';
import authReducer from './authSlice';
import { eventsApi } from './eventsAPI';

export const store = configureStore({
    reducer: {
authReducer,
[userAPI.reducerPath]: userAPI.reducer,
[eventsApi.reducerPath]: eventsApi.reducer,
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(userAPI.middleware, eventsApi.middleware)
})

