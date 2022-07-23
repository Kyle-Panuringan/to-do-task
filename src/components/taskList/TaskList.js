import React from "react";
import TaskItem from "../taskItem/TaskItem";
import TaskAdd from "../taskAdd/TaskAdd";
import { useSelector } from "react-redux";

const TaskList = () => {
	const tasks = useSelector((store) => store.task);
	return <div></div>;
};

export default TaskList;
