import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { INation } from 'models/INation';
import { fetchCountryByName } from './nationAction';

export interface NationState {
	nation: INation | null;
	status: 'loading' | 'success' | 'rejected';
}

const initialState: NationState = {
	nation: null,
	status: 'loading',
};

export const nationSlice = createSlice({
	name: 'nation',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchCountryByName.pending, state => {
			state.status = 'loading';
		});
		builder.addCase(
			fetchCountryByName.fulfilled,
			(state, action: PayloadAction<INation[]>) => {
				state.nation = action.payload[0];
				state.status = 'success';
			}
		);
		builder.addCase(fetchCountryByName.rejected, state => {
			state.status = 'rejected';
		});
	},
});

export const {} = nationSlice.actions;

export default nationSlice.reducer;
