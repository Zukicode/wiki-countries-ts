import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { ICountry } from 'models/ICountry';
import { fetchCountries, fetchCountriesByRegion } from './countryAction';

export interface CountryState {
	countries: ICountry[];
	filteredCountries: ICountry[];
	status: 'loading' | 'success' | 'rejected';
}

const initialState: CountryState = {
	countries: [],
	filteredCountries: [],
	status: 'loading',
};

export const countrySlice = createSlice({
	name: 'country',
	initialState,
	reducers: {
		setFilteredCountries: (state, action: PayloadAction<ICountry[]>) => {
			state.filteredCountries = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCountries.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchCountries.fulfilled,
			(state, action: PayloadAction<ICountry[]>) => {
				state.countries = action.payload;
				state.filteredCountries = action.payload;
				state.status = 'success';
			}
		);
		builder.addCase(fetchCountries.rejected, state => {
			state.status = 'rejected';
		});

		builder.addCase(fetchCountriesByRegion.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchCountriesByRegion.fulfilled,
			(state, action: PayloadAction<ICountry[]>) => {
				state.filteredCountries = action.payload;
				state.status = 'success';
			}
		);
		builder.addCase(fetchCountriesByRegion.rejected, state => {
			state.status = 'rejected';
		});
	},
});

export const { setFilteredCountries } = countrySlice.actions;

export default countrySlice.reducer;
