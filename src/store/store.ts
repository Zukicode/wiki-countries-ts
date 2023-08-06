import { combineReducers, configureStore } from '@reduxjs/toolkit';

import countrySlice from './country/countrySlice';
import filterSlice from './filter/filterSlice';
import nationSlice from './nation/nationSlice';

const reducers = combineReducers({
	country: countrySlice,
	nation: nationSlice,
	filter: filterSlice,
});

export const store = configureStore({
	reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
