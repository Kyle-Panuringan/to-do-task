import React, { useState } from "react";
import "../../css/taskAdd.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";

const TaskAdd = () => {
	const [taskValue, setTaskValue] = useState("");
	const [showAddForm, setShowAddForm] = useState(false);
	const dispatch = useDispatch();

	const handleAddTask = (e) => {
		e.preventDefault();
		dispatch(addTask({ title: taskValue }));
	};

	return (
		<div>
			{showAddForm ? (
				<div>
					<form onSubmit={handleAddTask}>
						<input
							type="text"
							value={taskValue}
							onChange={(e) => setTaskValue(e.target.value)}
						/>
						<button
							type="button"
							onClick={() => {
								setTaskValue("");
							}}
						>
							X
						</button>
						<button type="submit">Add Task</button>
						<button
							type="button"
							onClick={() => setShowAddForm(false)}
						>
							Close
						</button>
					</form>
				</div>
			) : (
				<button onClick={() => setShowAddForm(true)}>+</button>
			)}
		</div>
	);
};

export default TaskAdd;
