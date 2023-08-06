import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	filter: string;
}

const initialState: FilterState = {
	filter: '',
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string>) => {
			state.filter = action.payload;
		},
	},
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
