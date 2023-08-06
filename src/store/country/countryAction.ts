import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import { BASE_URL } from 'config/api';

export const fetchCountries = createAsyncThunk(
	'country/fetchCountries',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}all`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('Problem with loading country!');
		}
	}
);

export const fetchCountriesByRegion = createAsyncThunk(
	'country/fetchCountriesByRegion',
	async (region: string, thunkAPI) => {
		try {
			const response = await axios.get(`${BASE_URL}region/${region}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('Problem with loading country!');
		}
	}
);
