import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskSlice";
import modalReducer from "../features/modal/modalSlice";

const store = configureStore({
	reducer: {
		task: taskReducer,
		modal: modalReducer,
	},
});

export default store;
