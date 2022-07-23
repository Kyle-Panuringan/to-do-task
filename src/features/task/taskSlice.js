import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
	tasks: [],
};

const taskSlice = createSlice({
	name: "taskSlice",
	initialState,
	reducers: {
		addTask: (state, action) => {
			const unique_id = uuid();
			const newTask = {
				id: unique_id,
				title: action.payload.title,
				complete: false,
			};
			state.tasks.push(newTask);
		},
		deleteTask: (state, action) => {
			const id = action.payload;
			state.tasks = state.tasks.filter((task) => task.id !== id);
		},
		updateTask: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload.id) {
					task.title = action.payload.title;
				}
				return task;
			});
		},
		toggleComplete: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload) {
					task.complete = !task.complete;
				}
				return task;
			});
		},
	},
});

export const { addTask, deleteTask, updateTask, toggleComplete } =
	taskSlice.actions;

export default taskSlice.reducer;
