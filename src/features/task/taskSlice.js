import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const getTasks = () => {
	const tasks = localStorage.getItem("tasks");
	if (tasks) {
		return JSON.parse(tasks);
	}
	localStorage.setItem("tasks", "[]");
	return [];
};

const initialState = {
	tasks: getTasks(),
	filterStatus: "All",
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
			// Invoke and asign the return value of getTasks, then push the "newTask" and set to local Storage
			const taskListArr = getTasks();
			taskListArr.push(newTask);
			localStorage.setItem("tasks", JSON.stringify(taskListArr));
		},
		deleteTask: (state, action) => {
			const id = action.payload;
			let taskListArr = getTasks();
			// Filter all the ID that is not equal to the action.payload id value
			taskListArr = taskListArr.filter((task) => task.id !== id);
			localStorage.setItem("tasks", JSON.stringify(taskListArr));
			state.tasks = taskListArr;
		},
		updateTask: (state, action) => {
			const taskListArr = getTasks();
			taskListArr.map((task) => {
				if (task.id === action.payload.id) {
					task.title = action.payload.title;
				}
				return task;
			});
			localStorage.setItem("tasks", JSON.stringify(taskListArr));
			state.tasks = taskListArr;
		},
		toggleComplete: (state, action) => {
			state.tasks = state.tasks.map((task) => {
				if (task.id === action.payload) {
					task.complete = !task.complete;
				}
				return task;
			});
			const taskListArr = getTasks();
			taskListArr.map((task) => {
				if (task.id === action.payload) {
					task.complete = !task.complete;
				}
				return task;
			});
			localStorage.setItem("tasks", JSON.stringify(taskListArr));
			state.tasks = taskListArr;
		},
		filterStatus: (state, action) => {
			if (action.payload === "Pending") {
				state.filterStatus = "Pending";
			} else if (action.payload === "Completed") {
				state.filterStatus = "Completed";
			} else {
				state.filterStatus = "All";
			}
		},
	},
});

export const { addTask, deleteTask, updateTask, toggleComplete, filterStatus } =
	taskSlice.actions;

export default taskSlice.reducer;
