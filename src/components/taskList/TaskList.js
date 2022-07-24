import React from "react";
import TaskItem from "../taskItem/TaskItem";
import TaskAdd from "../taskAdd/TaskAdd";
import { useSelector } from "react-redux";

const TaskList = () => {
	const { tasks, filterStatus } = useSelector((store) => store.task);

	const taskListFiltered = tasks.filter((task) => {
		if (filterStatus === "Pending") {
			return task.complete === false;
		} else if (filterStatus === "Completed") {
			return task.complete === true;
		} else {
			return task;
		}
	});

	return (
		<div>
			{tasks.length ? (
				<div>
					{taskListFiltered.map((task) => {
						return <TaskItem key={task.id} {...task} />;
					})}
				</div>
			) : (
				<p>Empty</p>
			)}
			<TaskAdd />
		</div>
	);
};

export default TaskList;
