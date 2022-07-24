import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	id: null,
	modalOpen: false,
};

const modal = createSlice({
	name: "modal",
	initialState,
	reducers: {
		modalOpen: (state, action) => {
			state.id = action.payload;
			state.modalOpen = !state.modalOpen;
		},
	},
});

export const { modalOpen } = modal.actions;

export default modal.reducer;
