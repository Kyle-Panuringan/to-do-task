import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const unique_id = uuid();

const initialState = {
	tasks: [
		{
			id: unique_id,
			title: "",
			complete: false,
		},
	],
};

const taskSlice = createSlice({
	name: "taskSlice",
	initialState,
	reducers: {},
});

export default taskSlice.reducer;
