import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
	name: "taskSlice",
	initialState: [
		{ id: 1, title: "EAT" },
		{ id: 2, title: "WORK" },
		{ id: 3, title: "SLEEP" },
	],
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;
