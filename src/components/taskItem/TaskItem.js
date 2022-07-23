import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../features/task/taskSlice";

const TaskItem = ({ title, id }) => {
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};

	return (
		<div>
			<h2>{title}</h2>
			<button
				onClick={() => {
					handleDelete(id);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default TaskItem;
