import React, { useState, useRef } from "react";
import "../../css/taskAdd.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";

const TaskAdd = () => {
	const ref = useRef();
	const [taskValue, setTaskValue] = useState("");
	const [showAddForm, setShowAddForm] = useState(false);
	const dispatch = useDispatch();

	const handleAddTask = (e) => {
		e.preventDefault();
		if (taskValue) {
			dispatch(addTask({ title: taskValue }));
		}
		setTaskValue("");
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
							autoFocus
							ref={ref}
						/>
						<button
							type="button"
							onClick={() => {
								setTaskValue("");
							}}
						>
							X
						</button>
						<button
							type="submit"
							onClick={() => {
								ref.current.focus();
							}}
						>
							Add Task
						</button>
						<button
							type="button"
							onClick={() => setShowAddForm(false)}
						>
							Close
						</button>
					</form>
				</div>
			) : (
				<button
					onClick={() => {
						setShowAddForm(true);
					}}
				>
					+
				</button>
			)}
		</div>
	);
};

export default TaskAdd;
