import React, { useState } from "react";
import "../../css/taskAdd.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";

const TaskAdd = () => {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState("");
	const [displayAdd, setDisplayAdd] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		dispatch(addTask({ title: todo }));
	}

	return (
		<div>
			{displayAdd ? (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={todo}
						onChange={(e) => setTodo(e.target.value)}
					/>
					<button type="reset" onClick={() => setTodo("")}>
						X
					</button>
					<button type="submit">Add Task</button>
					<button
						type="button"
						onClick={() => {
							setDisplayAdd(false);
						}}
					>
						Cancel
					</button>
				</form>
			) : (
				<button
					onClick={() => {
						setDisplayAdd(true);
					}}
				>
					+
				</button>
			)}
		</div>
	);
};

export default TaskAdd;
