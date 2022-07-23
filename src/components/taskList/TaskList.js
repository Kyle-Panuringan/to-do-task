import React from "react";
import TaskItem from "../taskItem/TaskItem";
import TaskAdd from "../taskAdd/TaskAdd";
import { useSelector } from "react-redux";

const TaskList = () => {
	const tasks = useSelector((store) => store.task);
	return (
		<div>
			{tasks.map((task, id) => {
				return <TaskItem key={id} {...task} />;
			})}
			<TaskAdd />
		</div>
	);
};

export default TaskList;
