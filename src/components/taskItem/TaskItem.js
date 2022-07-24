import React, { useState, useRef } from "react";
import "../../css/taskItem.css";
import { FaEdit, FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
	deleteTask,
	updateTask,
	toggleComplete,
} from "../../features/task/taskSlice";

const TaskItem = ({ title, id, complete }) => {
	const ref = useRef();
	const dispatch = useDispatch();

	const [disableEdit, setDisableEdit] = useState(true);
	const [titleValue, setTitleValue] = useState(title);

	const handleDelete = (id) => {
		dispatch(deleteTask(id));
	};

	const handleSubmitEdit = (id) => {
		// Only try to dispatch if the new titleValue is not equal to the current title
		if (title !== titleValue) {
			// If titleValue is empty don't dispatch
			if (titleValue) {
				setDisableEdit(true);
				dispatch(updateTask({ id: id, title: titleValue }));
			}
		} else {
			// Disable the input edit title text
			setDisableEdit(true);
		}
	};

	const handleComplete = (id) => {
		dispatch(toggleComplete(id));
	};

	return (
		<div>
			<form
				className="taskItem-form"
				onSubmit={(e) => {
					e.preventDefault();
					handleSubmitEdit(id);
				}}
			>
				<div>
					<input
						type="checkbox"
						checked={complete}
						onChange={() => handleComplete(id)}
					/>
					<input
						type="text"
						value={titleValue}
						disabled={disableEdit}
						ref={ref}
						onChange={(e) => {
							setTitleValue(e.target.value);
						}}
					/>
				</div>

				<div>
					{disableEdit ? (
						<button
							type="button"
							onClick={(e) => {
								e.preventDefault();
								setDisableEdit(false);
								setTimeout(() => {
									ref.current.focus();
								}, 10);
							}}
						>
							<FaEdit />
						</button>
					) : (
						<button type="submit">
							<FaCheck />
						</button>
					)}
					<button
						type="button"
						onClick={() => {
							handleDelete(id);
						}}
					>
						<MdDelete />
					</button>
				</div>
			</form>
		</div>
	);
};

export default TaskItem;
