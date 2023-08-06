import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { GET_BY_NAME_URL } from 'config/api';

export const fetchCountryByName = createAsyncThunk(
	'country/fetchCountryByName',
	async (name: string, thunkAPI) => {
		try {
			const response = await axios.get(GET_BY_NAME_URL(name));
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue('Problem with loading country!');
		}
	}
);
