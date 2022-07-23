import React from "react";
import TaskItem from "../taskItem/TaskItem";
import TaskAdd from "../taskAdd/TaskAdd";
import { useSelector } from "react-redux";

const TaskList = () => {
	const tasks = useSelector((store) => store.task.tasks);

	React.useEffect(() => {
		console.log(tasks);
	}, [tasks]);

	return (
		<div>
			{tasks.length ? (
				<div>
					{tasks.map((task) => {
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
