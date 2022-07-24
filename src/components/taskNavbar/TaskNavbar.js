import React from "react";
import "../../css/taskNavbar.css";
import { useDispatch } from "react-redux";
import { filterStatus } from "../../features/task/taskSlice";

const TaskNavbar = () => {
	const dispatch = useDispatch();
	const handleClick = (e) => {
		dispatch(filterStatus(e.target.textContent));
	};
	return (
		<div className="taskNavBar-buttons">
			<button onClick={handleClick}>All</button>
			<button onClick={handleClick}>Pending</button>
			<button onClick={handleClick}>Completed</button>
		</div>
	);
};

export default TaskNavbar;
